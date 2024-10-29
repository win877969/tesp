import { connect } from "cloudflare:sockets"; 
//GANTI CONST PROXY SESUAI PROVIDER                                                                                                             
const proxyIPs = ["13.228.142.218"];              
const cn_hostnames = ['']; 
   
let dohURL = "https://dns.google/dns-query"; // https://cloudflare-dns.com/dns-query or https://dns.google/dns-query
     
let proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];

if (!isValidUUID(userID)) {
  throw new Error("uuid is not valid");
}

export default {
  /**
   * @param {import("@cloudflare/workers-types").Request} request
   * @param {uuid: string, proxyip: string} env
   * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env, ctx) {
    try {
      userID = env.uuid || userID;
      proxyIP = env.proxyip || proxyIP;
      const upgradeHeader = request.headers.get("Upgrade");
      if (!upgradeHeader || upgradeHeader !== "websocket") {
        const url = new URL(request.url);
        switch (url.pathname) {
          case "/cf":
            return new Response(JSON.stringify(request.cf, null, 4), {
              status: 200,
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              }, 
            });

          case `/vless`: {
            const vlessConfig = getVLESSConfig(userID, request.headers.get("Host"));
            return new Response(`${vlessConfig}`, {
              status: 200,
              headers: {
                "Content-Type": "text/html;charset=utf-8",
              },
            });
          }
          default:
            // return new Response('Not found', { status: 404 });
            // For any other path, reverse proxy to 'ramdom website' and return the original response, caching it in the process
            if (cn_hostnames.includes('')) {
            return new Response(JSON.stringify(request.cf, null, 4), {
              status: 200,
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
            });
            }
            const randomHostname = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)];
            const newHeaders = new Headers(request.headers);
            newHeaders.set("cf-connecting-ip", "1.2.3.4");
            newHeaders.set("x-forwarded-for", "1.2.3.4");
            newHeaders.set("x-real-ip", "1.2.3.4");
            newHeaders.set("referer", "https://www.google.com/search?q=cloudflare");
            // Use fetch to proxy the request to 15 different domains
            const proxyUrl = "https://" + randomHostname + url.pathname + url.search;
            let modifiedRequest = new Request(proxyUrl, {
              method: request.method,
              headers: newHeaders,
              body: request.body,
              redirect: "manual",
            });
            const proxyResponse = await fetch(modifiedRequest, { redirect: "manual" });
            // Check for 302 or 301 redirect status and return an error response
            if ([301, 302].includes(proxyResponse.status)) {
              return new Response(`Redirects to ${randomHostname} are not allowed.`, {
                status: 403,
                statusText: "Forbidden",
              });
            }
            // Return the response from the proxy server
            return proxyResponse;
        }
      } else {
        return await vlessOverWSHandler(request);
      }
    } catch (err) {
      /** @type {Error} */ let e = err;
      return new Response(e.toString());
    }
  },
};

/**
 *
 * @param {import("@cloudflare/workers-types").Request} request
 */
async function vlessOverWSHandler(request) {
  /** @type {import("@cloudflare/workers-types").WebSocket[]} */
  // @ts-ignore
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);

  webSocket.accept();

  let address = "";
  let portWithRandomLog = "";
  const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";

  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

  /** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
  let remoteSocketWapper = {
    value: null,
  };
  let udpStreamWrite = null;
  let isDns = false;  

  // ws --> remote
  readableWebSocketStream
    .pipeTo(
      new WritableStream({
        async write(chunk, controller) {
          if (isDns && udpStreamWrite) {
            return udpStreamWrite(chunk);
          }
          if (remoteSocketWapper.value) {
            const writer = remoteSocketWapper.value.writable.getWriter();
            await writer.write(chunk);
            writer.releaseLock();
            return;
          }

          const {
            hasError,
            message,
            portRemote = 443,
            addressRemote = "",
            rawDataIndex,
            vlessVersion = new Uint8Array([0, 0]),
            isUDP,
          } = await processVlessHeader(chunk, userID);
          address = addressRemote;
          portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp " : "tcp "} `;
          if (hasError) {
            // controller.error(message);
            throw new Error(message); // cf seems has bug, controller.error will not end stream
            // webSocket.close(1000, message);
            return;
          }
          // if UDP but port not DNS port, close it
          if (isUDP) {
            if (portRemote === 53) {
              isDns = true;    
            } else {
              // controller.error('UDP proxy only enable for DNS which is port 53');
              throw new Error("UDP proxy only enable for DNS which is port 53"); // cf seems has bug, controller.error will not end stream
              return;
            }
          }
          // ["version", "附加信息长度 N"]
          const vlessResponseHeader = new Uint8Array([vlessVersion[0], 0]);
          const rawClientData = chunk.slice(rawDataIndex);

          // TODO: support udp here when cf runtime has udp support
          if (isDns) {
            const { write } = await handleUDPOutBound(webSocket, vlessResponseHeader, log);
            udpStreamWrite = write;
            udpStreamWrite(rawClientData);
            return;
          }
          handleTCPOutBound(
            remoteSocketWapper,
            addressRemote,
            portRemote,
            rawClientData,
            webSocket,
            vlessResponseHeader,
            log
          );
        },
        close() {
          log(`readableWebSocketStream is close`);
        },
        abort(reason) {
          log(`readableWebSocketStream is abort`, JSON.stringify(reason));
        },
      })
    )
    .catch((err) => {
      log("readableWebSocketStream pipeTo error", err);
    });

  return new Response(null, {
    status: 101,
    // @ts-ignore
    webSocket: client,
  });
}
   
/**
 * Checks if a given UUID is present in the API response.
 * @param {string} targetUuid The UUID to search for.
 * @returns {Promise<boolean>} A Promise that resolves to true if the UUID is present in the API response, false otherwise.
 */
async function checkUuidInApiResponse(targetUuid) {
  // Check if any of the environment variables are empty

  try {
    const apiResponse = await getApiResponse();
    if (!apiResponse) {
      return false;
    }
    const isUuidInResponse = apiResponse.users.some((user) => user.uuid === targetUuid);
    return isUuidInResponse;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} vlessResponseHeader The VLESS response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
async function handleTCPOutBound(
  remoteSocket,
  addressRemote,
  portRemote,
  rawClientData,
  webSocket,
  vlessResponseHeader,
  log
) {
  async function connectAndWrite(address, port) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address)) address = `${atob('d3d3Lg==')}${address}${atob('LnNzbGlwLmlv')}`;
    /** @type {import("@cloudflare/workers-types").Socket} */
    const tcpSocket = connect({
      hostname: address,
      port: port,
    });
    remoteSocket.value = tcpSocket;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket.writable.getWriter();
    await writer.write(rawClientData); // first write, nomal is tls client hello
    writer.releaseLock();
    return tcpSocket;
  }

  // if the cf connect tcp socket have no incoming data, we retry to redirect ip
  async function retry() {
    const tcpSocket = await connectAndWrite(proxyIP || addressRemote, portRemote);
    // no matter retry success or not, close websocket
    tcpSocket.closed
      .catch((error) => {
        console.log("retry tcpSocket closed error", error);
      })
      .finally(() => {
        safeCloseWebSocket(webSocket);
      });
    remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, null, log);
  }

  const tcpSocket = await connectAndWrite(addressRemote, portRemote);

  // when remoteSocket is ready, pass to websocket
  // remote--> ws
  remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, retry, log);
}

/**
 *
 * @param {import("@cloudflare/workers-types").WebSocket} webSocketServer
 * @param {string} earlyDataHeader for ws 0rtt
 * @param {(info: string)=> void} log for ws 0rtt
 */
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        if (readableStreamCancel) {
          return;
        }
        const message = event.data;
        controller.enqueue(message);
      });

      // The event means that the client closed the client -> server stream.
      // However, the server -> client stream is still open until you call close() on the server side.
      // The WebSocket protocol says that a separate close message must be sent in each direction to fully close the socket.
      webSocketServer.addEventListener("close", () => {
        // client send close, need close server
        // if stream is cancel, skip controller.close
        safeCloseWebSocket(webSocketServer);
        if (readableStreamCancel) {
          return;
        }
        controller.close();
      });
      webSocketServer.addEventListener("error", (err) => {
        log("webSocketServer has error");
        controller.error(err);
      });
      // for ws 0rtt
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },

    pull(controller) {
      // if ws can stop read if stream is full, we can implement backpressure
      // https://streams.spec.whatwg.org/#example-rs-push-backpressure
    },
    cancel(reason) {
      // 1. pipe WritableStream has error, this cancel will called, so ws handle server close into here
      // 2. if readableStream is cancel, all controller.close/enqueue need skip,
      // 3. but from testing controller.error still work even if readableStream is cancel
      if (readableStreamCancel) {
        return;
      }
      log(`ReadableStream was canceled, due to ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    },
  });

  return stream;
}

// https://xtls.github.io/development/protocols/vless.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 *
 * @param { ArrayBuffer} vlessBuffer
 * @param {string} userID
 * @returns
 */
async function processVlessHeader(vlessBuffer, userID) {
  if (vlessBuffer.byteLength < 24) {
    return {
      hasError: true,
      message: "invalid data",
    };
  }
  const version = new Uint8Array(vlessBuffer.slice(0, 1));
  let isValidUser = false;
  let isUDP = false;
  const slicedBuffer = new Uint8Array(vlessBuffer.slice(1, 17));
  const slicedBufferString = stringify(slicedBuffer);

  const uuids = userID.includes(",") ? userID.split(",") : [userID];

  const checkUuidInApi = await checkUuidInApiResponse(slicedBufferString);
  isValidUser = uuids.some((userUuid) => checkUuidInApi || slicedBufferString === userUuid.trim());

  console.log(`checkUuidInApi: ${await checkUuidInApiResponse(slicedBufferString)}, userID: ${slicedBufferString}`);

  if (!isValidUser) {
    return {
      hasError: true,
      message: "invalid user",
    };
  }

  const optLength = new Uint8Array(vlessBuffer.slice(17, 18))[0];
  //skip opt for now

  const command = new Uint8Array(vlessBuffer.slice(18 + optLength, 18 + optLength + 1))[0];

  // 0x01 TCP
  // 0x02 UDP
  // 0x03 MUX
  if (command === 1) {
  } else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`,
    };
  }
  const portIndex = 18 + optLength + 1;
  const portBuffer = vlessBuffer.slice(portIndex, portIndex + 2);
  // port is big-Endian in raw data etc 80 == 0x005d
  const portRemote = new DataView(portBuffer).getUint16(0);

  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(vlessBuffer.slice(addressIndex, addressIndex + 1));

  // 1--> ipv4  addressLength =4
  // 2--> domain name addressLength=addressBuffer[1]
  // 3--> ipv6  addressLength =16
  const addressType = addressBuffer[0];
  let addressLength = 0;
  let addressValueIndex = addressIndex + 1;
  let addressValue = "";
  switch (addressType) {
    case 1:
      addressLength = 4;
      addressValue = new Uint8Array(vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(vlessBuffer.slice(addressValueIndex, addressValueIndex + 1))[0];
      addressValueIndex += 1;
      addressValue = new TextDecoder().decode(vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      break;
    case 3:
      addressLength = 16;
      const dataView = new DataView(vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      // 2001:0db8:85a3:0000:0000:8a2e:0370:7334
      const ipv6 = '2a09:bac5:39f3:88c::da:48'; 
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));   
      }
      addressValue = ipv6.join(":");
      // seems no need add [] for ipv6
      break;
    default:
      return {
        hasError: true,
        message: `invild  addressType is ${addressType}`,
      };
  }
  if (!addressValue) {
    return {
      hasError: true,
      message: `addressValue is empty, addressType is ${addressType}`,
    };
  }

  return {
    hasError: false,
    addressRemote: addressValue,
    addressType,
    portRemote,
    rawDataIndex: addressValueIndex + addressLength,
    vlessVersion: version,
    isUDP,
  };
}

/**
 *
 * @param {import("@cloudflare/workers-types").Socket} remoteSocket
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket
 * @param {ArrayBuffer} vlessResponseHeader
 * @param {(() => Promise<void>) | null} retry
 * @param {*} log
 */
async function remoteSocketToWS(remoteSocket, webSocket, vlessResponseHeader, retry, log) {
  // remote--> ws
  let remoteChunkCount = 0;
  let chunks = [];
  /** @type {ArrayBuffer | null} */
  let vlessHeader = vlessResponseHeader;
  let hasIncomingData = false; // check if remoteSocket has incoming data
  await remoteSocket.readable
    .pipeTo(
      new WritableStream({
        start() {},
        /**
         *
         * @param {Uint8Array} chunk
         * @param {*} controller
         */
        async write(chunk, controller) {
          hasIncomingData = true;
          // remoteChunkCount++;
          if (webSocket.readyState !== WS_READY_STATE_OPEN) {
            controller.error("webSocket.readyState is not open, maybe close");
          }
          if (vlessHeader) {
            webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
            vlessHeader = null;
          } else {
            // seems no need rate limit this, CF seems fix this??..
            // if (remoteChunkCount > 20000) {
            // 	// cf one package is 4096 byte(4kb),  4096 * 20000 = 80M
            // 	await delay(1);
            // }
            webSocket.send(chunk);
          }
        },
        close() {
          log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
          // safeCloseWebSocket(webSocket); // no need server close websocket frist for some case will casue HTTP ERR_CONTENT_LENGTH_MISMATCH issue, client will send close event anyway.
        },
        abort(reason) {
          console.error(`remoteConnection!.readable abort`, reason);
        },
      })
    )
    .catch((error) => {
      console.error(`remoteSocketToWS has exception `, error.stack || error);
      safeCloseWebSocket(webSocket);
    });

  // seems is cf connect socket have error,
  // 1. Socket.closed will have error
  // 2. Socket.readable will be close without any data coming
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}

/**
 *
 * @param {string} base64Str
 * @returns
 */
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) {
    return { error: null };
  }
  try {
    // go use modified Base64 for URL rfc4648 which js atob not support
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) {
    return { error };
  }
}

/**
 * This is not real UUID validation
 * @param {string} uuid
 */
function isValidUUID(uuid) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

const WS_READY_STATE_OPEN = 1;
const WS_READY_STATE_CLOSING = 2;
/**
 * Normally, WebSocket will not has exceptions when close.
 * @param {import("@cloudflare/workers-types").WebSocket} socket
 */
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (
    byteToHex[arr[offset + 0]] +
    byteToHex[arr[offset + 1]] +
    byteToHex[arr[offset + 2]] +
    byteToHex[arr[offset + 3]] +
    "-" +
    byteToHex[arr[offset + 4]] +
    byteToHex[arr[offset + 5]] +
    "-" +
    byteToHex[arr[offset + 6]] +
    byteToHex[arr[offset + 7]] +
    "-" +
    byteToHex[arr[offset + 8]] +
    byteToHex[arr[offset + 9]] +
    "-" +
    byteToHex[arr[offset + 10]] +
    byteToHex[arr[offset + 11]] +
    byteToHex[arr[offset + 12]] +
    byteToHex[arr[offset + 13]] +
    byteToHex[arr[offset + 14]] +
    byteToHex[arr[offset + 15]]
  ).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!isValidUUID(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}

/**
 *
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket
 * @param {ArrayBuffer} vlessResponseHeader
 * @param {(string)=> void} log
 */
async function handleUDPOutBound(webSocket, vlessResponseHeader, log) {
  let isVlessHeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {},
    transform(chunk, controller) {
      // udp message 2 byte is the the length of udp data
      // TODO: this should have bug, beacsue maybe udp chunk can be in two websocket message
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPakcetLength));
        index = index + 2 + udpPakcetLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {},
  });                 
                                
 // only handle dns udp for now
const dnsStream = new TransformStream({
  async transform(chunk, controller) {
    const resp = await fetch('https://dns.google/dns-query', {
      method: "POST",  
      headers: {
        'Content-Type': 'application/dns-message',
      },
      body: chunk,
    });
    const dnsQueryResult = await resp.arrayBuffer();
    const udpSize = dnsQueryResult.byteLength;
    // console.log([...new Uint8Array(dnsQueryResult)].map((x) => x.toString(16)));
    const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
    if (webSocket.readyState === WebSocket.OPEN) {
      log(`doh success and dns message length is ${udpSize}`);
      if (isVlessHeaderSent) {
        webSocket.send(new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
      } else {
        webSocket.send(new Blob([vlessResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        isVlessHeaderSent = true;
      }
    }
  },
});

const writer = dnsStream.writable.getWriter();

return {
  /**
   *
   * @param {Uint8Array} chunk
   */
  write(chunk) {
    writer.write(chunk);
  },
};
}   
     
/**
 *
 * @param {string} userID
 * @param {string | null} hostName
 * @returns {string}
 */
function getVLESSConfig(userID, hostName) {
  const wvlessws = `vless://${userID}\u0040ISIBUG:80?encryption=none&security=none&type=ws&host=${hostName}&path=/vlesshub#${hostName}`;
  const pvlesswstls = `vless://${userID}\u0040ISIBUG:443?encryption=none&security=tls&type=ws&host=${hostName}&sni=${hostName}&fp=random&path=VLESS#${hostName}`;
  const note = `Yongge's blog address: https://ygkkk.blogspot.com\nYongge's YouTube channel: https://www.youtube.com/@ygkkk\nYongge's TG Telegram group: https://t.me/+jZHc6-A-1QQ5ZGVl\nYongge's TG Telegram channel: https://t.me/+DkC9ZZUgEFQzMTZl\n\nProxyIP in use: ${proxyIP}`;
  const noteshow = note.replace(/\n/g, '<br>');
  const displayHtml = `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<style>
  .limited-width {
    max-width: 200px;
    overflow: auto;
    word-wrap: break-word;
  }
</style>
</head>
<script>
  function copyToClipboard(text) {
    const input = document.createElement('textarea');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    alert('Copied to clipboard');
  }
</script> `; if (hostName.includes("pages.dev")) { return ` ${displayHtml} <body>
  <div class="container">   
    <div class="row">
      <div class="col-md-12">
        <h2>Configuration details</h2>
        <p>${noteshow}</p>
        <hr>
        <br>
        <br>
        <h3>CF-pages-vless+ws+tls node, sharing link is as follows:</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Node type</th>
              <th>Share link</th>
              <th>Copy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="limited-width">CF-pages-vless+ws+tls</td>
              <td class="limited-width">${pvlesswstls}</td>
              <td>
                <button class="btn btn-primary" onclick="copyToClipboard('${pvlesswstls}')">Copy</button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
        <p>Note: If ${hostName} cannot be opened in the local network (note for China Mobile users), the client must enable the slicing function</p>
        <hr>
        <h3>Necessary civilized parameters for the client are as follows:</h3>
        <ul>
          <li>Client address: custom domain name or preferred domain name or preferred IP (reverse IP must correspond to reverse port)</li>
          <li>Port: 6 https ports can be selected at will (443, 8443, 2053, 2083, 2087, 2096)</li>
          <li>User ID (uuid): ${userID}</li>
          <li>Transport protocol (network): ws or websocket</li>
          <li>Fake domain name (host): ${hostName}</li>
          <li>Path (path): /vlesshub</li>
          <li>Transport security (TLS): open</li>
          <li>Skip certificate verification (allowlnsecure): false</li>
        </ul>
      </div>    
    </div>        
  </div>
</body> `; } else { return ` ${displayHtml} 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="VLESS HUB VPN menyediakan akun VLESS gratis dengan server dari Indonesia, Singapura dan beberapa server negara lainnya. Akses VPN tanpa batas dengan update harian dan tanpa expired account.">
    <meta name="keywords" content="Free akun VLESS gratis, VLESS, VPN, gratis, server VPN, Google LLC, Amazon AWS, VPN tanpa batas, pembaruan harian">
    <meta name="author" content="VLESS HUB">
    <meta property="og:title" content="VLESS HUB VPN">
    <meta property="og:description" content="Free akun VLESS gratis dengan server dari Indonesia, Singapura dan beberapa server negara lainnya. Akses VPN tanpa batas dengan update harian dan tanpa expired account.">
    <meta property="og:image" content="https://i.postimg.cc/vZP1M7s8/VLESS.png">
    <meta property="og:url" content="https://id.vlesscf.us.kg/vless">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="VLESS HUB VPN">
    <meta name="twitter:description" content="Free akun VLESS gratis dengan server dari Indonesia, Singapura dan beberapa server negara lainnya. Akses VPN tanpa batas dengan update harian dan tanpa expired account.">
    <meta name="twitter:image" content="https://i.postimg.cc/vZP1M7s8/VLESS.png">
    <link rel="icon" href="https://i.postimg.cc/MTz3J8bj/faficonhub.png" type="image/png">
    <title>VLESS HUB VPN</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: "Roboto", sans-serif;
            letter-spacing: 0.5px;
            font-weight: 400;
            background: linear-gradient(135deg, #1e1e1e, #121212);
            color: #ffffff;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
	    
        }
        header {
            background: rgba(0, 0, 0, 0.9);
            padding: 10px 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
        }
        
        .navbar-brand {
            color: #f7951e;
            font-weight: 700;
        }
        .navbar-brand:hover {
            color: #e0e0e0;
        }
        .navbar-nav .nav-link {
            color: #f7951e;
            font-weight: 700;
        }
        .navbar-nav .nav-link:hover {
            color: #e0e0e0;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            padding-top: 70px; /* Space for fixed header */
        }
        .card {
            position: relative;
            width: 100%;
            max-width: 600px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
            border-radius: 12px;
            padding: 20px;
            box-sizing: border-box;
            margin: 15px;
        }
        .card:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8);
            transform: translateY(-5px);
        }
        .card__top {
            height: auto;
            overflow: hidden;
            border-radius: 8px;
            margin-bottom: 15px;
            position: relative;
        }
        .card__top img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        .card__content {
            text-align: center;
        }
        .rounded-box, .rounded-box2 {
            padding: 15px;
            border: 2px solid #fff;
            border-radius: 8px;
            background-color: rgba(0, 0, 0, 0.4);
            margin-bottom: 15px;
            text-align: left;
        }
        .rounded-box {
            background-color: rgba(0, 0, 0, 0.4);
        }
        .rounded-box2 {
            background-color: rgba(0, 0, 0, 0.5);
        }
        .rounded-box .info-item, .rounded-box2 .info-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .info-item span.label {
            font-weight: 600;
        }
        .info-item span.value {
            text-align: right;
        }
        .card__content h1 {
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 15px;
        }
        .card__content h2 {
            font-size: 20px;
            font-weight: 600;
            margin: 10px 0;
        }
        .card__content h3 {
            font-size: 16px;
            font-weight: 400;
        }
        .button {
            text-decoration: none;
            color: #fff;
            background: #f7951e;
            padding: 12px 20px;
            border-radius: 6px;
            display: inline-block;
            margin: 10px 5px;
            text-align: center;
            font-size: 14px;
            transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .button:hover {
            background: #d67e1e;
            transform: scale(1.05);
        }
        .button:active {
            background: #b76c1d;
            transform: scale(0.98);
        }
        .button:focus {
            outline: 2px solid #f7951e;
            outline-offset: 4px;
        }
        footer {
            background: rgba(0, 0, 0, 0.9);
            color: #e0e0e0;
            text-align: center;
            padding: 20px;
            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.3);
            width: 100%;
            position: relative;
            bottom: 0;
            margin: 0;
        }
        footer a {
            color: #f7951e;
            text-decoration: none;
            font-weight: 700;
        }
        footer a:hover {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            .card {
                width: 100%;
                margin: 0;
                max-height: none;
            }
            .card__top {
                height: auto;
            }
            .button {
                padding: 10px 15px;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#">VLESS HUB VPN</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#server-id">Server ID</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#server-sg">Server SG</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#information">Information</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <div class="container">
        <div class="card">
            <div class="card__top">
                <img src="https://i.postimg.cc/vZP1M7s8/VLESS.png" alt="VLESS HUB logo" loading="lazy">
            </div>
            <div class="card__content">
                <h1>【 VLESS HUB ＶＰＮ】</h1>
                <div class="rounded-box">
                    <div class="info-item">
                        <span class="label">IP</span>
                        <span class="value">${proxyIP}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Domain</span>
                        <span class="value">${hostName}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">ISP</span>
                        <span class="value">Amazon.com, Inc.</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Country</span>
                        <span class="value">Singapore</span>
                    </div>
                    <div class="info-item">
                        <span class="label">City</span>
                        <span class="value">Singapore</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Type</span>
                        <span class="value">vless</span>
                    </div>
                    <div class="info-item">
                        <span class="label">USER ID</span>
                        <span class="value">${userID}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Port TLS</span>
                        <span class="value">443</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Port Ntls</span>
                        <span class="value">80</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Network</span>
                        <span class="value">WebSocket</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Path</span>
                        <span class="value">/vlesshub</span>
                    </div>
                </div>
                <div class="rounded-box2">
                    <p>Support Wildcard :</p>
                    <ul>
                        <li>go.appannie.com.${hostName}</li>
                        <li>quiz.int.vidio.com.${hostName}</li>
                        <li>quiz.vidio.com.${hostName}</li>
                        <li>ava.game.naver.${hostName}</li>
                        <li>graph.instagram.com.${hostName}</li>
                        <li>investors.spotify.com.${hostName}</li>
                        <li>zaintest.vuclip.com.${hostName}</li>
                        <li>support.zoom.us.${hostName}</li>
                    </ul>
                </div>
                <div class="text-center">
                    <button class="button" onclick='copyToClipboard("${pvlesswstls}")'>COPY TLS 443</button>
                    <button class="button" onclick='copyToClipboard("${wvlessws}")'>COPY NTLS 80</button>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 VLESS HUB. All rights reserved.</p>
        <p>Follow us on | <a href="https://t.me/antblacksh" target="_blank" rel="noopener noreferrer">Telegram</a></p>
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "VLESS HUB VPN",
        "description": "Free akun VLESS gratis dengan server dari Indonesia, Singapura dan beberapa server negara lainnya. Akses VPN tanpa batas dengan update harian dan tanpa expired account.",
        "publisher": {
            "@type": "Organization",
            "name": "VLESS HUB"
        }
    }
    </script>
    <script>
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy: ' + err);
            });
        }
    </script>
</body>
</html>     
`;
  }
}  