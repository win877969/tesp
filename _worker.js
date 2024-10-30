// worker.js
import { connect } from "cloudflare:sockets";
var listProxy = [
  { path: "/vl=203.194.112.119:8443", proxy: "203.194.112.119:8443" },
  { path: "/vl=111.95.40.14:32414", proxy: "111.95.40.14:32414" },
  { path: "/vl=103.186.1.209:8443", proxy: "103.186.1.209:8443" },
  { path: "/vl=35.219.50.99:443", proxy: "35.219.50.99:443" },
  { path: "/vl=35.219.15.90:443", proxy: "35.219.15.90:443" },
  { path: "/vl=210.186.12.244:443", proxy: "210.186.12.244:443" },
  { path: "/vl=166.88.35.141:443", proxy: "166.88.35.141:443" },
  { path: "/vl=167.71.194.185:8443", proxy: "167.71.194.185:8443" },
  { path: "/vl=89.34.227.166:8443", proxy: "89.34.227.166:8443" },
  { path: "/vl=45.77.36.40:443", proxy: "45.77.36.40:443" },
  { path: "/vl=43.134.34.18:443", proxy: "43.134.34.18:443" },
  { path: "/vl=103.180.193.56:443", proxy: "103.180.193.56:443" },
  { path: "/vl=164.52.2.100:443", proxy: "164.52.2.100:443" },
  { path: "/vl=51.79.254.182:443", proxy: "51.79.254.182:443" },
  { path: "/vl=104.248.145.216:443", proxy: "104.248.145.216:443" },
  { path: "/vl=185.217.5.3:443", proxy: "185.217.5.3:443" },
  { path: "/vl=129.150.50.63:443", proxy: "129.150.50.63:443" },
  { path: "/vl=185.114.78.230:443", proxy: "185.114.78.230:443" },
  { path: "/vl=194.36.179.237:443", proxy: "194.36.179.237:443" },
  { path: "/vl=52.74.101.26:443", proxy: "52.74.101.26:443" },
  { path: "/vl=143.42.66.91:443", proxy: "143.42.66.91:443" },
  { path: "/vl=178.128.80.43:443", proxy: "178.128.80.43:443" },
  { path: "/vl=38.180.165.29:443", proxy: "38.180.165.29:443" },
  { path: "/vl=185.103.109.139:443", proxy: "185.103.109.139:443" },
  { path: "/vl=31.28.27.38:443", proxy: "31.28.27.38:443" }
//  { path: "/vl=194.36.179.237", proxy: "194.36.179.237" },
 // { path: "/vl=52.74.101.26", proxy: "52.74.101.26" },
// batas
 // { path: "/vl=38.180.165.29", proxy: "38.180.165.29" },
//  { path: "/vl=143.42.66.91", proxy: "143.42.66.91" },
//  { path: "/vl=185.103.109.139", proxy: "185.103.109.139" },
//  { path: "/vl=178.128.80.43", proxy: "178.128.80.43" },
//  { path: "/vl=35.219.15.90", proxy: "35.219.15.90" },
 // { path: "/vl=8.223.39.101", proxy: "8.223.39.101" },
//  { path: "/vl=175.142.86.195", proxy: "175.142.86.195" },
//  { path: "/vl=166.88.35.141", proxy: "166.88.35.141" },
//  { path: "/vl=31.28.27.38", proxy: "31.28.27.38" },
//  { path: "/vl=203.194.112.119", proxy: "203.194.112.119" },
 // { path: "/vl=104.17.159.243", proxy: "104.17.159.243" }
  //tambahin sendiri
];
var proxyIP;
var proxyPort;
var worker_default = {
  async fetch(request, ctx) {
    try {
      proxyIP = proxyIP;
      const url = new URL(request.url);
      const upgradeHeader = request.headers.get("Upgrade");
      for (const entry of listProxy) {
        if (url.pathname === entry.path) {
          [proxyIP, proxyPort] = entry.proxy.split(':');
          break;
        }
      }
      if (upgradeHeader === "websocket" && proxyIP) {
        return await vlessOverWSHandler(request);
      }
      const allConfig = await getAllConfigVless(request.headers.get("Host"));
      return new Response(allConfig, {
        status: 200,
        headers: { "Content-Type": "text/html;charset=utf-8" }
      });
    } catch (err) {
      return new Response(err.toString(), { status: 500 });
    }
  }
};
async function getAllConfigVless(hostName) {
  try {
    let vlessConfigs = "";
    let clashConfigs = "";
    for (const entry of listProxy) {
      const { path, proxy } = entry;
      const [ipOnly] = proxy.split(':');
      const response = await fetch(`http://ip-api.com/json/${ipOnly}`);
      const data = await response.json();
      const pathFixed = encodeURIComponent(path);
           const vlessTls = `vless://FREE-VLESS-BMGK-XYZ@xvp.bmkg.xyz:443?encryption=none&security=tls&sni=xvp.bmkg.xyz&fp=randomized&type=ws&host=xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
     const vlessTls1 = `vless://FREE-VLESS-BMGK-XYZ@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=ava.game.naver.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
     const vlessTls2 = `vless://FREE-VLESS-BMGK-XYZ@graph.instagram.com:443?encryption=none&security=tls&sni=graph.instagram.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=graph.instagram.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
     const vlessTls3 = `vless://FREE-VLESS-BMGK-XYZ@quiz.int.vidio.com.:443?encryption=none&security=tls&sni=quiz.int.vidio.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=quiz.int.vidio.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
     const vlessTls4 = `vless://FREE-VLESS-BMGK-XYZ@live.iflix.com.:443?encryption=none&security=tls&sni=live.iflix.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=live.iflix.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls5 = `vless://FREE-VLESS-BMGK-XYZ@support.zoom.us.:443?encryption=none&security=tls&sni=support.zoom.us.xvp.bmkg.xyz&fp=randomized&type=ws&host=support.zoom.us.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls6 = `vless://FREE-VLESS-BMGK-XYZ@blog.webex.com.:443?encryption=none&security=tls&sni=blog.webex.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=blog.webex.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls7 = `vless://FREE-VLESS-BMGK-XYZ@investors.spotify.com.:443?encryption=none&security=tls&sni=investors.spotify.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=investors.spotify.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls8 = `vless://FREE-VLESS-BMGK-XYZ@cache.netflix.com.:443?encryption=none&security=tls&sni=cache.netflix.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=cache.netflix.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls9 = `vless://FREE-VLESS-BMGK-XYZ@zaintest.vuclip.com.:443?encryption=none&security=tls&sni=zaintest.vuclip.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=zaintest.vuclip.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls10 = `vless://FREE-VLESS-BMGK-XYZ@io.ruangguru.com.:443?encryption=none&security=tls&sni=io.ruangguru.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=io.ruangguru.com.xvp.bmkg.xyz&path=${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessNtls = `vless://FREE-VLESS-BMGK-XYZ@xvp.bmkg.xyz:80?path=${pathFixed}&security=none&encryption=none&host=xvp.bmkg.xyz&fp=randomized&type=ws&sni=xvp.bmkg.xyz#${data.isp} (${data.countryCode})`;
      const vlessTlsFixed = vlessTls.replace(/ /g, "+");
      const vlessTls1Fixed = vlessTls1.replace(/ /g, "+");
      const vlessTls2Fixed = vlessTls2.replace(/ /g, "+");
      const vlessTls3Fixed = vlessTls3.replace(/ /g, "+");
      const vlessTls4Fixed = vlessTls4.replace(/ /g, "+");
      const vlessTls5Fixed = vlessTls5.replace(/ /g, "+");
      const vlessTls6Fixed = vlessTls6.replace(/ /g, "+");
      const vlessTls7Fixed = vlessTls7.replace(/ /g, "+");
      const vlessTls8Fixed = vlessTls8.replace(/ /g, "+");
      const vlessTls9Fixed = vlessTls9.replace(/ /g, "+");
      const vlessTls10Fixed = vlessTls10.replace(/ /g, "+");
      const vlessNtlsFixed = vlessNtls.replace(/ /g, "+");
      const clashConfTls = `- name: ${data.isp} (${data.countryCode})
  server: xvp.bmkg.xyz
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: xvp.bmkg.xyz`;
      
      const clashConfTls1 = `- name: ${data.isp} (${data.countryCode})
  server: ava.game.naver.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: ava.game.naver.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: ava.game.naver.com.xvp.bmkg.xyz`;
      
      const clashConfTls2 = `- name: ${data.isp} (${data.countryCode})
  server: graph.instagram.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: graph.instagram.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: graph.instagram.com.xvp.bmkg.xyz`;
      
      const clashConfTls3 = `- name: ${data.isp} (${data.countryCode})
  server: quiz.int.vidio.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: quiz.int.vidio.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: quiz.int.vidio.com.xvp.bmkg.xyz`;
      
      const clashConfTls4 = `- name: ${data.isp} (${data.countryCode})
  server: live.iflix.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: live.iflix.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: live.iflix.com.xvp.bmkg.xyz`;
      
      const clashConfTls5 = `- name: ${data.isp} (${data.countryCode})
  server: support.zoom.us
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: support.zoom.us.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: support.zoom.us.xvp.bmkg.xyz`;
      
      const clashConfTls6 = `- name: ${data.isp} (${data.countryCode})
  server: blog.webex.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: blog.webex.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: blog.webex.com.xvp.bmkg.xyz`;
      
      const clashConfTls7 = `- name: ${data.isp} (${data.countryCode})
  server: investors.spotify.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: investors.spotify.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: investors.spotify.com.xvp.bmkg.xyz`;
      
      const clashConfTls8 = `- name: ${data.isp} (${data.countryCode})
  server: cache.netflix.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: cache.netflix.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: cache.netflix.com.xvp.bmkg.xyz`;
      
      const clashConfTls9 = `- name: ${data.isp} (${data.countryCode})
  server: zaintest.vuclip.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: zaintest.vuclip.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: zaintest.vuclip.com.xvp.bmkg.xyz`;
      
      const clashConfTls10 = `- name: ${data.isp} (${data.countryCode})
  server: io.ruangguru.com
  port: 443
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: io.ruangguru.com.xvp.bmkg.xyz
  ws-opts:
    path: ${path}
    headers:
      Host: io.ruangguru.com.xvp.bmkg.xyz`;
      const clashConfNtls = `- name: ${data.isp} (${data.countryCode})
  server: xvp.bmkg.xyz
  port: 80
  type: vless
  uuid: FREE-VLESS-BMGK-XYZ
  cipher: auto
  tls: false
  udp: true
  skip-cert-verify: true
  network: ws
  ws-opts:
    path: ${path}
    headers:
      Host: xvp.bmkg.xyz`;
      clashConfigs += `<div style="display: none;">
   <textarea id="clashTls${path}">${clashConfTls}</textarea>
   <textarea id="clashTls1${path}">${clashConfTls1}</textarea>
   <textarea id="clashTls2${path}">${clashConfTls2}</textarea>
   <textarea id="clashTls3${path}">${clashConfTls3}</textarea>
   <textarea id="clashTls4${path}">${clashConfTls4}</textarea>
   <textarea id="clashTls5${path}">${clashConfTls5}</textarea>
   <textarea id="clashTls6${path}">${clashConfTls6}</textarea>
   <textarea id="clashTls7${path}">${clashConfTls7}</textarea>
   <textarea id="clashTls8${path}">${clashConfTls8}</textarea>
   <textarea id="clashTls9${path}">${clashConfTls9}</textarea>
   <textarea id="clashTls10${path}">${clashConfTls10}</textarea>
   </div>
<div style="display: none;">
   <textarea id="clashNtls${path}">${clashConfNtls}</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP :  ${data.isp} (${data.countryCode})</strong> </p>
    <hr/>
    <div class="config-toggle">
        <button class="button2" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
          <p class="config">${clashConfTls}</p>
                <button class="button2" onclick='copyClash("clashTls${path}")'><i class="fa fa-clipboard"></i>Copy</button>
          </div><div class="config-block">
           <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyClash("clashTls1${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyClash("clashTls2${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyClash("clashTls3${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» live.iflix.com
                <button class="button2" onclick='copyClash("clashTls4${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» support.zoom.us
                <button class="button2" onclick='copyClash("clashTls5${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» blog.webex.com
                <button class="button2" onclick='copyClash("clashTls6${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyClash("clashTls7${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» cache.netflix.com
                <button class="button2" onclick='copyClash("clashTls8${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyClash("clashTls9${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» io.ruangguru.com
                <button class="button2" onclick='copyClash("clashTls10${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          
          </div>
            <hr />
            <div class="config-block">
                <h3>NTLS:</h3>
                <p class="config">${clashConfNtls}</p>
                <button class="button2" onclick='copyClash("clashNtls${path}")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
`;
      vlessConfigs += `<div class="config-section">
    <p><strong>ISP  :  ${data.isp} (${data.countryCode}) </strong> </p>
    <hr />
    <div class="config-toggle">
        <button class="button2" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">${vlessTlsFixed}</p>
                <button class="button2" onclick='copyToClipboard("${vlessTlsFixed}")'><i class="fa fa-clipboard"></i>Copy</button>
               </div> <div class="config-block">
               <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyToClipboard("${vlessTls1Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>
              <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyToClipboard("${vlessTls2Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyToClipboard("${vlessTls3Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» live.iflix.com
                <button class="button2" onclick='copyToClipboard("${vlessTls4Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>    
             <p class="config">» support.zoom.us
                <button class="button2" onclick='copyToClipboard("${vlessTls5Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
             <p class="config">» blog.webex.com
                <button class="button2" onclick='copyToClipboard("${vlessTls6Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
             <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyToClipboard("${vlessTls7Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
              <p class="config">» cache.netflix.com
                <button class="button2" onclick='copyToClipboard("${vlessTls8Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>  
               <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyToClipboard("${vlessTls9Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
               <p class="config">» io.ruangguru.com
                <button class="button2" onclick='copyToClipboard("${vlessTls10Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
               
               </div>
            <hr />
            <div class="config-block">
                <h3>NTLS:</h3>
                <p class="config">${vlessNtlsFixed}</p>
                <button class="button2" onclick='copyToClipboard("${vlessNtlsFixed}")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
        </div>
    </div>
</div>
<hr class="config-divider" />
`;
    }
    const htmlConfigs = `





                                                        
            

            
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VlessCF</title>
  <style>
    html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      font-family: monospace;
      background-color: #dfe1ed;
      overflow: hidden;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .popup {
      width: 95vw;
      height: 90vh;
      border-radius: 20px;
      border: 5px solid #ebf0f4;
      background-color: #dfe6ed;
      display: flex;
      flex-direction: row;
    }
    .tabs {
      width: 150px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      border-right: 1px solid #ebf0f4;
    }
    label {
      font-size: 14px;
      cursor: pointer;
      color: black;
      padding: 5px;
      background: #ebf0f4;
      border-radius: 5px;
      margin: 1px 0;
    }
    label:hover {
      background-color: #d3d8e0;
    }
    input[type="radio"] {
      display: none;
    }
    .tab-content {
      flex: 1;
      padding: 8px;
      overflow-y: auto;
      font-size: 12px;
      color: #333;
      word-wrap: break-word;
    }
    .tab-content .content {
      display: none;
    }
    .tab-content .content.active {
      display: block;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="popup">
    <div class="tabs" role="tablist"></div>
    <div class="tab-content"></div>
  </div>

  <script>
    fetch('https://raw.githubusercontent.com/AFRcloud/newip/refs/heads/main/web.txt')
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const tabs = lines.map(line => {
          const parts = line.split(',');
          return { id: parts[2], name: parts[3], ip: parts[0], port: parts[1] };
        });

        const tabContainer = document.querySelector('.tabs');
        const contentContainer = document.querySelector('.tab-content');

        tabs.forEach((tab, index) => {
          const tabId = `tab${index + 1}`;
          const radioButton = document.createElement('input');
          radioButton.type = 'radio';
          radioButton.id = tabId;
          radioButton.name = 'tab';
          if (index === 0) radioButton.checked = true;

          const label = document.createElement('label');
          label.setAttribute('for', tabId);
          label.innerText = `${tab.id} ${tab.name}`;

          tabContainer.appendChild(radioButton);
          tabContainer.appendChild(label);

          const content = document.createElement('div');
          content.className = 'content';
          const vlessLink = `vless://Noir7R@hidden-tree-571d.flarex1.workers.dev:443?encryption=none&security=tls&sni=hidden-tree-571d.flarex1.workers.dev&fp=randomized&type=ws&host=hidden-tree-571d.flarex1.workers.dev&path=%2Fvl%3D${tab.ip}%3D${tab.port}#${tab.id} ${tab.name}`;
          const proxyConfig = `proxies:
- name: (${tab.id}) ${tab.name}
  server: hidden-tree-571d.flarex1.workers.dev
  port: 443
  type: vless
  uuid: Noir7R
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: hidden-tree-571d.flarex1.workers.dev
  ws-opts:
    path: /vl=${tab.ip}=${tab.port}
    headers:
      Host: hidden-tree-571d.flarex1.workers.dev
`;

          content.innerHTML = `
            <h2>Vless Information</h2>
            <div>
              <strong>Domain:</strong> hidden-tree-571d.flarex1.workers.dev<br>
              <strong>UUID:</strong> Noir7R<br>
              <strong>Type:</strong> VLESS<br>
              <strong>ISP:</strong> ${tab.name}<br>
              <strong>Region:</strong> ${tab.id}<br>
              <strong>IP:</strong> ${tab.ip}<br>
              <strong>Port:</strong> ${tab.port}<br>
              <strong>Path:</strong> /vl=${tab.ip}=${tab.port}<br><br><br>
              <strong>Link V2Ray : </strong> <span id="vless-link-${index}">${vlessLink}</span><br>
              <button onclick="copyToClipboard('vless-link-${index}')">Copy Link</button><br>
              <pre id="proxy-config-${index}">${proxyConfig}</pre>
              <button onclick="copyToClipboard('proxy-config-${index}')">Copy Proxies</button><br>
            </div>
          `;

          if (index === 0) {
            content.classList.add('active');
          }

          contentContainer.appendChild(content);
        });

        document.querySelectorAll('input[name="tab"]').forEach((tab, index) => {
          tab.addEventListener('change', function() {
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => content.classList.remove('active'));
            contents[index].classList.add('active');
          });
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please try again later.');
      });

    function copyToClipboard(elementId) {
      const text = document.getElementById(elementId).innerText;
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Copied to clipboard!');
        })
        .catch(err => {
          console.error('Error copying text: ', err);
        });
    }
  </script>
</body>
</html>
    

    


`;
    return htmlConfigs;
  } catch (error) {
    return `An error occurred while generating the VLESS configurations. ${error}`;
  }
}
function generateUUIDv4() {
  const randomValues = crypto.getRandomValues(new Uint8Array(16));
  randomValues[6] = randomValues[6] & 15 | 64;
  randomValues[8] = randomValues[8] & 63 | 128;
  return [
    randomValues[0].toString(16).padStart(2, "0"),
    randomValues[1].toString(16).padStart(2, "0"),
    randomValues[2].toString(16).padStart(2, "0"),
    randomValues[3].toString(16).padStart(2, "0"),
    randomValues[4].toString(16).padStart(2, "0"),
    randomValues[5].toString(16).padStart(2, "0"),
    randomValues[6].toString(16).padStart(2, "0"),
    randomValues[7].toString(16).padStart(2, "0"),
    randomValues[8].toString(16).padStart(2, "0"),
    randomValues[9].toString(16).padStart(2, "0"),
    randomValues[10].toString(16).padStart(2, "0"),
    randomValues[11].toString(16).padStart(2, "0"),
    randomValues[12].toString(16).padStart(2, "0"),
    randomValues[13].toString(16).padStart(2, "0"),
    randomValues[14].toString(16).padStart(2, "0"),
    randomValues[15].toString(16).padStart(2, "0")
  ].join("").replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5");
}
async function vlessOverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = {
    value: null
  };
  let udpStreamWrite = null;
  let isDns = false;
  readableWebSocketStream.pipeTo(new WritableStream({
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
        isUDP
      } = processVlessHeader(chunk);
      address = addressRemote;
      portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp " : "tcp "} `;
      if (hasError) {
        throw new Error(message);
        return;
      }
      if (isUDP) {
        if (portRemote === 53) {
          isDns = true;
        } else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
          return;
        }
      }
      const vlessResponseHeader = new Uint8Array([vlessVersion[0], 0]);
      const rawClientData = chunk.slice(rawDataIndex);
      if (isDns) {
        const { write } = await handleUDPOutBound(webSocket, vlessResponseHeader, log);
        udpStreamWrite = write;
        udpStreamWrite(rawClientData);
        return;
      }
      handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log);
    },
    close() {
      log(`readableWebSocketStream is close`);
    },
    abort(reason) {
      log(`readableWebSocketStream is abort`, JSON.stringify(reason));
    }
  })).catch((err) => {
    log("readableWebSocketStream pipeTo error", err);
  });
  return new Response(null, {
    status: 101,
    webSocket: client
  });
}
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log) {
  async function connectAndWrite(address, port) {
    const tcpSocket2 = connect({
      hostname: address,
      port
    });
    remoteSocket.value = tcpSocket2;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket2.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket2;
  }
  async function retry() {
    const tcpSocket2 = await connectAndWrite(proxyIP || addressRemote, proxyPort || portRemote);
    tcpSocket2.closed.catch((error) => {
      console.log("retry tcpSocket closed error", error);
    }).finally(() => {
      safeCloseWebSocket(webSocket);
    });
    remoteSocketToWS(tcpSocket2, webSocket, vlessResponseHeader, null, log);
  }
  const tcpSocket = await connectAndWrite(addressRemote, portRemote);
  remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, retry, log);
}
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
      webSocketServer.addEventListener(
        "close",
        () => {
          safeCloseWebSocket(webSocketServer);
          if (readableStreamCancel) {
            return;
          }
          controller.close();
        }
      );
      webSocketServer.addEventListener(
        "error",
        (err) => {
          log("webSocketServer has error");
          controller.error(err);
        }
      );
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    pull(controller) {
    },
    cancel(reason) {
      if (readableStreamCancel) {
        return;
      }
      log(`ReadableStream was canceled, due to ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    }
  });
  return stream;
}
function processVlessHeader(vlessBuffer) {
  if (vlessBuffer.byteLength < 24) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  const version = new Uint8Array(vlessBuffer.slice(0, 1));
  let isValidUser = true;
  let isUDP = false;
  if (!isValidUser) {
    return {
      hasError: true,
      message: "invalid user"
    };
  }
  const optLength = new Uint8Array(vlessBuffer.slice(17, 18))[0];
  const command = new Uint8Array(
    vlessBuffer.slice(18 + optLength, 18 + optLength + 1)
  )[0];
  if (command === 1) {
  } else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`
    };
  }
  const portIndex = 18 + optLength + 1;
  const portBuffer = vlessBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(
    vlessBuffer.slice(addressIndex, addressIndex + 1)
  );
  const addressType = addressBuffer[0];
  let addressLength = 0;
  let addressValueIndex = addressIndex + 1;
  let addressValue = "";
  switch (addressType) {
    case 1:
      addressLength = 4;
      addressValue = new Uint8Array(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      ).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + 1)
      )[0];
      addressValueIndex += 1;
      addressValue = new TextDecoder().decode(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      );
      break;
    case 3:
      addressLength = 16;
      const dataView = new DataView(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      );
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      addressValue = ipv6.join(":");
      break;
    default:
      return {
        hasError: true,
        message: `invild  addressType is ${addressType}`
      };
  }
  if (!addressValue) {
    return {
      hasError: true,
      message: `addressValue is empty, addressType is ${addressType}`
    };
  }
  return {
    hasError: false,
    addressRemote: addressValue,
    addressType,
    portRemote,
    rawDataIndex: addressValueIndex + addressLength,
    vlessVersion: version,
    isUDP
  };
}
async function remoteSocketToWS(remoteSocket, webSocket, vlessResponseHeader, retry, log) {
  let remoteChunkCount = 0;
  let chunks = [];
  let vlessHeader = vlessResponseHeader;
  let hasIncomingData = false;
  await remoteSocket.readable.pipeTo(
    new WritableStream({
      start() {
      },
      async write(chunk, controller) {
        hasIncomingData = true;
        if (webSocket.readyState !== WS_READY_STATE_OPEN) {
          controller.error(
            "webSocket.readyState is not open, maybe close"
          );
        }
        if (vlessHeader) {
          webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
          vlessHeader = null;
        } else {
          webSocket.send(chunk);
        }
      },
      close() {
        log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
      },
      abort(reason) {
        console.error(`remoteConnection!.readable abort`, reason);
      }
    })
  ).catch((error) => {
    console.error(
      `remoteSocketToWS has exception `,
      error.stack || error
    );
    safeCloseWebSocket(webSocket);
  });
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) {
    return { error: null };
  }
  try {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) {
    return { error };
  }
}
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}
async function handleUDPOutBound(webSocket, vlessResponseHeader, log) {
  let isVlessHeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {
    },
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(
          chunk.slice(index + 2, index + 2 + udpPakcetLength)
        );
        index = index + 2 + udpPakcetLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {
    }
  });
  transformStream.readable.pipeTo(new WritableStream({
    async write(chunk) {
      const resp = await fetch(
        "https://1.1.1.1/dns-query",
        {
          method: "POST",
          headers: {
            "content-type": "application/dns-message"
          },
          body: chunk
        }
      );
      const dnsQueryResult = await resp.arrayBuffer();
      const udpSize = dnsQueryResult.byteLength;
      const udpSizeBuffer = new Uint8Array([udpSize >> 8 & 255, udpSize & 255]);
      if (webSocket.readyState === WS_READY_STATE_OPEN) {
        log(`doh success and dns message length is ${udpSize}`);
        if (isVlessHeaderSent) {
          webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        } else {
          webSocket.send(await new Blob([vlessResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          isVlessHeaderSent = true;
        }
      }
    }
  })).catch((error) => {
    log("dns udp has error" + error);
  });
  const writer = transformStream.writable.getWriter();
  return {
    write(chunk) {
      writer.write(chunk);
    }
  };
}
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
