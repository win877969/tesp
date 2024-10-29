  <script src=
  "https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <style>
            .form-control::placeholder {
                color: #999;
                font-style: italic;
            }
            table.dataTable {
                background-color: #343a40;
                border: 1px solid #6c757d;
                color: white;
                border-collapse: collapse;
            }
            .table-dark tr,
            .table-dark td {
                color: white;
                vertical-align: middle;
            }
            table.dataTable thead {
                background-color: #495057;
                color: white;
            }
            table.dataTable thead th {
                text-align: center;
                border: 1px solid #6c757d;
            }
            table.dataTable tbody td {
                text-align: center;
                border: 1px solid #50575e;
            }
            table.dataTable tbody tr {
                border: 1px solid #50575e;
            }
            table.dataTable tbody tr:hover {
                background-color: #50575e;
            }
            .dataTables_wrapper .dataTables_filter label,
            .dataTables_wrapper .dataTables_length label,
            .dataTables_wrapper .dataTables_info,
            .dataTables_wrapper .dataTables_paginate {
                color: white;
            }
            .dataTables_wrapper .dataTables_filter input,
            .dataTables_wrapper .dataTables_length select {
                color: white;
            }
            .dataTables_wrapper .dataTables_paginate .paginate_button {
                color: white;
            }
            .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
                background-color: #50575e;
                color: white;
            }
            .dataTables_wrapper .dataTables_paginate .paginate_button.current {
                background-color: #50575e;
                color: white;
                border: 1px solid #6c757d;
            }
            .dataTables_wrapper .dataTables_info,
            .dataTables_wrapper .dataTables_paginate {
                color: white;
                text-align: center;
            }
  </style>
</head>
<body class="bg-dark text-white">
  <div class="container mt-4">
    <div class="text-center mt-4">
      <h1 class="text-center">Free VPN Vless</h1>
    </div>
    <div class="card bg-secondary text-white">
      <div class="card-body">
        <h3 class="text-center">Add Proxy</h3>
        <form method="post" action="#">
          <div class="mb-3">
            <label for="proxy" class="form-label">Proxy
            <small class="text-warning" style=
            "font-style: italic;">(Max 10 lines)</small></label> 
            <textarea rows="5" cols="10" class="form-control" id=
            "proxy" name="proxy" placeholder=
            "wildcard : ava.game.naver.com, quiz.vidio.com, graph.instagram.com, investors.spotify.com, io.ruangguru.com, zaintest.vuclip.com, support.zoom.us, cache.netflix.com dll..">
            </textarea>
            <div class=
            "alert alert-danger alert-dismissible fade show mt-2"
            id="lineWarning" style="display: none;">
              You can only enter a maximum of 10 lines.
            </div>
          </div><button type="submit" class=
          "btn btn-primary w-100"> Submit</button>
        </form>
      </div>
    </div>
    <div class="card bg-secondary text-white mt-4">
      <div class="card-body">
        <h3 class="text-center">Proxy Database</h3>
        <div class="table-responsive">
          <table id="proxyTable" class=
          "table table-bordered table-striped text-white bg-dark table-dark mt-3">
            <thead>
              <tr>
                <th>Proxy</th>
                <th>Country</th>
                <th>ISP</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101.50.0.114:8443</td>
                <td>Indonesia</td>
                <td>Pt. Beon Intermedia</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D101.50.0.114%3A8443#Pt.+Beon+Intermedia")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D101.50.0.114%3A8443&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Pt.+Beon+Intermedia")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>172.232.252.101:587</td>
                <td>Indonesia</td>
                <td>Akamai Technologies, Inc.</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D172.232.252.101%3A587#Akamai+Technologies,+Inc.")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D172.232.252.101%3A587&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Akamai+Technologies,+Inc.")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>35.219.50.99:587</td>
                <td>Indonesia</td>
                <td>Google LLC</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D8.215.23.33%3A587#Google+LLC")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D8.215.23.33%3A587&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Google+LLC")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>129.150.50.63:443</td>
                <td>Singapore</td>
                <td>Oracle Corporation</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D129.150.50.63%3A443#Oracle+Corporation")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D129.150.50.63%3A443&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Oracle+Corporation")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>103.133.223.52:2096</td>
                <td>Indonesia</td>
                <td>Pt Cloud Teknologi Nusantara</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D103.133.223.52%3A2096#Pt+Cloud+Teknologi+Nusantara")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D103.133.223.52%3A2096&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Pt+Cloud+Teknologi+Nusantara")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>165.154.48.233:587</td>
                <td>Indonesia</td>
                <td>UCLOUD INFORMATION TECHNOLOGY HK LIMITED</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D165.154.48.233%3A587#UCLOUD+INFORMATION+TECHNOLOGY+HK+LIMITED")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D165.154.48.233%3A587&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#UCLOUD+INFORMATION+TECHNOLOGY+HK+LIMITED")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>35.219.15.90:443</td>
                <td>Indonesia</td>
                <td>Google LLC</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D35.219.15.90%3A443#Google+LLC")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D35.219.15.90%3A443&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Google+LLC")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>43.218.79.114:2053</td>
                <td>Indonesia</td>
                <td>Amazon.com, Inc.</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D43.218.79.114%3A2053#Amazon.com,+Inc.")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D43.218.79.114%3A2053&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Amazon.com,+Inc.")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>203.194.112.119:2053</td>
                <td>Indonesia</td>
                <td>Rumahweb</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D203.194.112.119%3A2053#Rumahweb")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D203.194.112.119%3A2053&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Rumahweb")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>47.236.7.98:587</td>
                <td>Singapore</td>
                <td>Alibaba us Technology Co., Ltd.</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D47.236.7.98%3A587#Alibaba+us+Technology+Co.,+Ltd.")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D47.236.7.98%3A587&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Alibaba+us+Technology+Co.,+Ltd.")'>
                Copy NTLS</button></td>
              </tr>
              <tr>
                <td>157.230.33.184:80</td>
                <td>Singapore</td>
                <td>Digitalocean, LLC</td>
                <td><button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:443?encryption=none&amp;security=tls&amp;sni=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;host=vless.recycle.web.id&amp;path=%2Fvless%3D157.230.33.184%3A80#Digitalocean,+LLC")'>
                Copy TLS</button> <button class="button2" onclick=
                'copyToClipboard("vless://Palestine@vless.recycle.web.id:80?path=%2Fvless%3D157.230.33.184%3A80&amp;security=none&amp;encryption=none&amp;host=vless.recycle.web.id&amp;fp=randomized&amp;type=ws&amp;sni=vless.recycle.web.id#Digitalocean,+LLC")'>
                Copy NTLS</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
