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
    <meta charset="utf-8">
    <title>DarkPan - Bootstrap 5 Admin Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet"> 
    
    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/owl.carousel.min.css" rel="stylesheet">
    <link href="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/style.css" rel="stylesheet">
</head>

<body>
    <div class="container-fluid position-relative d-flex p-0">
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->


        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>DarkPan</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <a href="index.html" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="button.html" class="dropdown-item">Buttons</a>
                            <a href="typography.html" class="dropdown-item">Typography</a>
                            <a href="element.html" class="dropdown-item">Other Elements</a>
                        </div>
                    </div>
                    <a href="widget.html" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</a>
                    <a href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>
                    <a href="table.html" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="signin.html" class="dropdown-item">Sign In</a>
                            <a href="signup.html" class="dropdown-item">Sign Up</a>
                            <a href="404.html" class="dropdown-item">404 Error</a>
                            <a href="blank.html" class="dropdown-item">Blank Page</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->


        <!-- Content Start -->
        <div class="content">
            <!-- Navbar Start -->
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control bg-dark border-0" type="search" placeholder="Search">
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-bell me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">My Profile</a>
                            <a href="#" class="dropdown-item">Settings</a>
                            <a href="#" class="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navbar End -->


            <!-- Sale & Revenue Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-line fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-bar fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-area fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sale & Revenue End -->


            <!-- Sales Chart Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Worldwide Sales</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="worldwide-sales"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Salse & Revenue</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="salse-revenue"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sales Chart End -->


            <!-- Recent Sales Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Recent Salse</h6>
                        <a href="">Show All</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col"><input class="form-check-input" type="checkbox"></th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Recent Sales End -->


            <!-- Widgets Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-secondary rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <h6 class="mb-0">Messages</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center pt-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-secondary rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Calender</h6>
                                <a href="">Show All</a>
                            </div>
                            <div id="calender"></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-secondary rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">To Do List</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex mb-2">
                                <input class="form-control bg-dark border-0" type="text" placeholder="Enter task">
                                <button type="button" class="btn btn-primary ms-2">Add</button>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox" checked>
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span><del>Short task goes here...</del></span>
                                        <button class="btn btn-sm text-primary"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center pt-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Widgets End -->


            <!-- Footer Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary rounded-top p-4">
                    <div class="row">
                        <div class="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                        </div>
                        <div class="col-12 col-sm-6 text-center text-sm-end">
                            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                            <br>Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->
        </div>
        <!-- Content End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/chart.min.js"></script>
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/easing.min.js"></script>
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/waypoints.min.js"></script>
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/owl.carousel.min.js"></script>
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/js/moment.min.js"></script>
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/moment-timezone.min.js"></script>
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/tempusdominus-bootstrap-4.min.js"></script>

    <!-- Template Javascript -->
    <script src="https://raw.githubusercontent.com/win877969/webjumpakawan/refs/heads/main/scr/main.js"></script>


        

        
        
       
        
        
    

            


    

    
        function showContent(contentId) {
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(contentId).classList.add('active');
        }
        function salinTeks() {
            var teks = document.getElementById('teksAsli');
            teks.select();
            document.execCommand('copy');
            alert('Teks telah disalin.');
        }
        function copyClash(elementId) {
            const text = document.getElementById(elementId).textContent;
            navigator.clipboard.writeText(text)
            .then(() => {
            const alertBox = document.createElement('div');
            alertBox.textContent = "Copied to clipboard!";
            alertBox.style.position = 'fixed';
            alertBox.style.bottom = '20px';
            alertBox.style.right = '20px';
            alertBox.style.backgroundColor = 'yellow';
            alertBox.style.color = '#000';
            alertBox.style.padding = '10px 20px';
            alertBox.style.borderRadius = '5px';
            alertBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            alertBox.style.opacity = '0';
            alertBox.style.transition = 'opacity 0.5s ease-in-out';
            document.body.appendChild(alertBox);
            setTimeout(() => {
                alertBox.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                alertBox.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(alertBox);
                }, 500);
            }, 2000);
        })
        .catch((err) => {
            console.error("Failed to copy to clipboard:", err);
        });
        }
function fetchAndDisplayAlert(path) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP error! Status: \${response.status}\`);
            }
            return response.json();
        })
        .then(data => {
            const proxyStatus = data.proxyStatus || "Unknown status";
            const alertBox = document.createElement('div');
            alertBox.textContent = \`Proxy Status: \${proxyStatus}\`;
            alertBox.style.position = 'fixed';
            alertBox.style.bottom = '20px';
            alertBox.style.right = '20px';
            alertBox.style.backgroundColor = 'yellow';
            alertBox.style.color = '#000';
            alertBox.style.padding = '10px 20px';
            alertBox.style.borderRadius = '5px';
            alertBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            alertBox.style.opacity = '0';
            alertBox.style.transition = 'opacity 0.5s ease-in-out';
            document.body.appendChild(alertBox);
            
            setTimeout(() => {
                alertBox.style.opacity = '1';
            }, 100);
            
            setTimeout(() => {
                alertBox.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(alertBox);
                }, 500);
            }, 2000);
        })
        .catch((err) => {
            alert("Failed to fetch data or invalid response.");
        });
}
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    const alertBox = document.createElement('div');
                    alertBox.textContent = "Copied to clipboard!";
                    alertBox.style.position = 'fixed';
                    alertBox.style.bottom = '20px';
                    alertBox.style.right = '20px';
                    alertBox.style.backgroundColor = 'yellow';
                    alertBox.style.color = '#000';
                    alertBox.style.padding = '10px 20px';
                    alertBox.style.borderRadius = '5px';
                    alertBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    alertBox.style.opacity = '0';
                    alertBox.style.transition = 'opacity 0.5s ease-in-out';
                    document.body.appendChild(alertBox);
                    setTimeout(() => {
                        alertBox.style.opacity = '1';
                    }, 100);
                    setTimeout(() => {
                        alertBox.style.opacity = '0';
                        setTimeout(() => {
                            document.body.removeChild(alertBox);
                        }, 500);
                    }, 2000);
                })
                .catch((err) => {
                    console.error("Failed to copy to clipboard:", err);
                });
        }

        function toggleConfig(button, show, hide) {
            const configContent = button.nextElementSibling;
            if (configContent.classList.contains('active')) {
                configContent.classList.remove('active');
                button.textContent = show;
            } else {
                configContent.classList.add('active');
                button.textContent = hide;
            }
        }
    <\/script>
</body>
</html>`;
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
