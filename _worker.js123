// @ts-ignore
import { connect } from 'cloudflare:sockets';

// How to generate your own UUID:
// [Windows] Press "Win + R", input cmd and run:  Powershell -NoExit -Command "[guid]::NewGuid()"
let userID = 'd342d11e-d424-4583-b36e-524ab1f0afa4';

const พร็อกซีไอพีs = ['51.79.254.182', 'https://ipdb.api.030101.xyz/?type=bestproxy&country=true', 'bestcf.onecf.eu.org', 'cfip.xxxxxxxx.tk', 'bestproxy.onecf.eu.org', 'proxy.xxxxxxxx.tk', 'acjp2.cloudflarest.link:2053', 'acsg.cloudflarest.link:2053', 'acsg3.cloudflarest.link:2053', 'cdn-b100.xn--b6gac.eu.org', 'cdn-all.xn--b6gac.eu.org', 'xn--b6gac.eu.org', '194.58.56.87', '129.150.37.203', '18.141.204.88', '202.10.42.30', '52.74.101.26', '8.219.98.13'];

// if you want to use ipv6 or single พร็อกซีไอพี, please add comment at this line and remove comment at the next line
let พร็อกซีไอพี = พร็อกซีไอพีs[Math.floor(Math.random() * พร็อกซีไอพีs.length)];
// use single พร็อกซีไอพี instead of random
// let พร็อกซีไอพี = 'cdn.xn--b6gac.eu.org';
// ipv6 พร็อกซีไอพี example remove comment to use
// let พร็อกซีไอพี = "[2a01:4f8:c2c:123f:64:5:6810:c55a]"

let dohURL = 'https://sky.rethinkdns.com/1:-Pf_____9_8A_AMAIgE8kMABVDDmKOHTAKg='; // https://cloudflare-dns.com/dns-query or https://dns.google/dns-query

if (!isValidUUID(userID)) {
	throw new Error('uuid is invalid');
}

function homePageHTML() {
    return `


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>VPN | by-Embeng</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4C+6PCWJ+8zzHcXQjXGp6n5Yh9rX0x5fOdPaOqO+e2X4R5C1aE/BSqPIG+8y3O6APa8w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="https://raw.githubusercontent.com/AFRcloud/BG/main/icons8-film-noir-80.png" type="image/png">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            color: #355E3B;
            background-color: black;
            display: flex;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            overflow: hidden;
        }

        .container {
            max-width: 1200px;
            width: 90%;
            margin: 3px;
            background: rgba(237 ,232, 208, 1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            animation: fadeIn 1s ease-in-out;
            overflow-y: auto;
            max-height: 97vh;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 90%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: -1;
        }
        .profile-pic {
    width: 300px;
    height: 300px;
    box-shadow: 0 0 15px rgba(58, 95, 65, 1);
    margin: 0;
		}

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            margin-top: 10px;
        }

        .header h1 {
            font-size: 42px;
            color: #EDE8D0;
            margin: 0;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 4px;
        }

        .nav-buttons {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 20px;
            gap: 10px;
        }

        .nav-buttons .button {
            background-color: transparent;
            border: 3px solid #EDE8D0;
            color: #EDE8D0;
            padding: 6px 12px;
            font-size: 20px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        .nav-buttons .button:hover {
            background-color: #EDE8D0;
            color: #fff;
            transform: scale(1.05);
        }

        .content {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }

        .content.active {
            display: block;
            opacity: 1;
        }

        .config-section {
            background: rgba(200, 173, 127, 1);
            padding: 20px;
            margin-right: 5px;
            margin-left: 5px;
            border: 2px solid #EDE8D0;
            border-radius: 10px;
            position: relative;
            animation: slideIn 0.5s ease-in-out;
        }

        @keyframes slideIn {
            from { transform: translateX(-30px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .config-section h3 {
            margin-top: 0;
            color: #355E3B;
            font-size: 28px;
        }

        .config-section p {
            color: #f5f5f5;
            font-size: 16px;
        }

        .config-toggle {
            margin-bottom: 10px;
        }

        .config-content {
            display: none;
        }

        .config-content.active {
            display: block;
        }

        .config-block {
            margin-bottom: 10px;
            padding: 15px;
            background-color: rgba(200, 173, 127, 1);
            margin-right: 5px;
            margin-left: 5px;
            border-radius: 10px;
            border: 2px solid #EDE8D0;
            color: #f5f5f5;
            transition: background-color 0.3s ease;
        }

        .config-block h4 {
            margin-bottom: 8px;
            color: #355E3B;
            font-size: 22px;
            font-weight: 600;
        }

        .config {
            background-color: rgba(200, 173, 127, 1);
            padding: 15px;
            border-radius: 5px;
            border: 2px solid #EDE8D0;
            color: #2d3035;
            word-wrap: break-word;
            white-space: pre-wrap;
            font-family: 'Courier New', Courier, monospace;
            font-size: 15px;
        }
        .button {
            background-color: transparent;
            border: 2px solid #EDE8D0;
            color: #EDE8D0;
            padding: 4px 8px;
            font-size: 12px;
            border-radius: 3px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-right: 4px;
        }

        .button i {
            margin-right: 3px;
        }

        .button:hover {
            background-color: #EDE8D0;
            color: #fff;
            transform: scale(1.0);
        }

        .config-divider {
            border: none;
            height: 1px;
            background: linear-gradient(to right, transparent, #fff, transparent);
            margin: 20px 0;
        }
        .watermark {
            background-color: rgba(200, 173, 127, 1);
            padding: 17px;
            margin-right: 5px;
            margin-left: 5px;
            border-radius: 10px;
            border: 2px solid #EDE8D0;
            color: #f5f5f5;
            word-wrap: break-word;
            white-space: pre-wrap;
            font-family: 'Courier New', Courier, monospace;
            font-size: 15px;
        }
        .watermark a {
            color: #EDE8D0;
            text-decoration: none;
            font-weight: bold;
        }
        .watermark a:hover {
            color: #EDE8D0;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 32px;
            }

            .config-section h3 {
                font-size: 24px;
            }

            .config-block h4 {
                font-size: 20px;
            }

            .domain-list {
                font-size: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="overlay"></div>
    <div class="container">
        <div class="header">
                    <div class="profile-container">
				<img src="https://raw.githubusercontent.com/Embeng123/bbbb/refs/heads/main/Embee55_25-12-2023xzxb3o.png" alt="IsraeL Anjinggg" class="profile-pic">
            <h2>FREE VPN VLESS 🇮🇩🇵🇸</h2>
        </div>
        <div class="config-section">
        <div class="nav-buttons">
            <button class="button" onclick="showContent('vless')">List vless</button>
            <button class="button" onclick="showContent('clash')">List Clash</button>
        </div>
        <center><a href="https://excalidraw.com" class="button">Coret²</a> <a href="https://cdn.videy.co/DEdh6EAq1.mp4" class="button">Video</a></center><br>
        </div><hr class="config-divider" />
        <div class="config-section">
        
        <strong>Note: </strong><br>
        ✰ Utk wilcard bisa request!<br>
        </div>
        <hr class="config-divider" />
        <div id="vless" class="content active">
            <div class="config-section">
    <p><strong>ISP : Incapsula INC (US) </strong> </p>
    <p><strong>NEGARA :</strong> United States</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="337a404152565f0e7152515a73565e51565d541d545455551d5d5647">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F1#Incapsula+INC+(US)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F1#Incapsula+INC+(US)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="347d4746555158097655565d7447445557511a564d411a5d50">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F1#Incapsula+INC+(US)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F1#Incapsula+INC+(US)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e6af959487838adba487848fa6879087c881878b83c88887908394c885898b">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F1#+Xcl+Incapsula+INC(US)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F1#+Xcl+Incapsula+INC(US)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Akamai Technologies, Inc. (US) </strong> </p>
    <p><strong>NEGARA :</strong> United States</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c980babba8aca5f48ba8aba089aca4abaca7aee7aeaeafafe7a7acbd">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F2#Akamai+Technologies,+Inc.+(US)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F2#Akamai+Technologies,+Inc.+(US)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8fc6fcfdeeeae3b2cdeeede6cffcffeeeceaa1edf6faa1e6eb">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F2#Akamai+Technologies,+Inc.+(US)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F2#Akamai+Technologies,+Inc.+(US)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="632a101102060f5e2102010a230215024d04020e064d0d021506114d000c0e">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F2#+Xcl+Akamai+Technologies,+Inc.(US)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F2#+Xcl+Akamai+Technologies,+Inc.(US)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Oracle Corporation (SG) </strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7a3309081b1f1647381b18133a1f17181f141d541d1d1c1c54141f0e">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F3#Oracle+Corporation+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F3#Oracle+Corporation+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="347d4746555158097655565d7447445557511a564d411a5d50">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F3#Oracle+Corporation+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F3#Oracle+Corporation+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1f566c6d7e7a73225d7e7d765f7e697e31787e727a31717e697a6d317c7072">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F3#+Xcl+Oracle+Corporation(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F3#+Xcl+Oracle+Corporation(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Amazon.com, Inc. (SG) </strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="571e242536323b6a1536353e17323a35323930793030313179393223">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F4#Amazon.com,+Inc.+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F4#Amazon.com,+Inc.+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="236a505142464f1e6142414a6350534240460d415a560d4a47">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F4#Amazon.com,+Inc.+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F4#Amazon.com,+Inc.+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="84cdf7f6e5e1e8b9c6e5e6edc4e5f2e5aae3e5e9e1aaeae5f2e1f6aae7ebe9">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F4#+Xcl+Amazon.com,+Inc.(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F4#+Xcl+Amazon.com,+Inc.(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Google LLC (ID) </strong> </p>
    <p><strong>NEGARA :</strong> Indonesia</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2069535241454c1d6241424960454d42454e470e474746460e4e4554">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F5#Google+LLC+(ID)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F5#Google+LLC+(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d29ba1a0b3b7beef90b3b0bb92a1a2b3b1b7fcb0aba7fcbbb6">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F5#Google+LLC+(ID)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F5#Google+LLC+(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e9a09a9b888c85d4ab888b80a9889f88c78e88848cc787889f8c9bc78a8684">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F5#+Xcl+Google+LLC(ID)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F5#+Xcl+Google+LLC(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Akamai Technologies, Inc. (ID) </strong> </p>
    <p><strong>NEGARA :</strong> Indonesia</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2d645e5f4c4841106f4c4f446d48404f48434a034a4a4b4b03434859">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F6#Akamai+Technologies,+Inc.+(ID)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F6#Akamai+Technologies,+Inc.+(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="90d9e3e2f1f5fcadd2f1f2f9d0e3e0f1f3f5bef2e9e5bef9f4">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F6#Akamai+Technologies,+Inc.+(ID)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F6#Akamai+Technologies,+Inc.+(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2c655f5e4d4940116e4d4e456c4d5a4d024b4d414902424d5a495e024f4341">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F6#+Xcl+Akamai+Technologies,+Inc.(ID)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F6#+Xcl+Akamai+Technologies,+Inc.(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Ifog GmbH (SG) </strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4e073d3c2f2b22730c2f2c270e2b232c2b2029602929282860202b3a">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F7#Ifog+GmbH+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F7#Ifog+GmbH+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f6bf858497939acbb497949fb68586979593d8948f83d89f92">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F7#Ifog+GmbH+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F7#Ifog+GmbH+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b2fbc1c0d3d7de8ff0d3d0dbf2d3c4d39cd5d3dfd79cdcd3c4d7c09cd1dddf">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F7#+Xcl+Ifog+GmbH(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F7#+Xcl+Ifog+GmbH(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Digitalocean, LLC (SG) </strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5e172d2c3f3b32631c3f3c371e3b333c3b3039703939383870303b2a">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F8#Digitalocean,+LLC+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F8#Digitalocean,+LLC+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="9ed7edecfffbf2a3dcfffcf7deedeefffdfbb0fce7ebb0f7fa">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F8#Digitalocean,+LLC+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F8#Digitalocean,+LLC+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7c350f0e1d1910413e1d1e153c1d0a1d521b1d111952121d0a190e521f1311">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F8#+Xcl+Digitalocean,+LLC(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F8#+Xcl+Digitalocean,+LLC(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Alibaba us Technology Co., Ltd. (SG) </strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4a0339382b2f2677082b28230a2f27282f242d642d2d2c2c64242f3e">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F9#Alibaba+us+Technology+Co.,+Ltd.+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F9#Alibaba+us+Technology+Co.,+Ltd.+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="df96acadbebab3e29dbebdb69facafbebcbaf1bda6aaf1b6bb">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F9#Alibaba+us+Technology+Co.,+Ltd.+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F9#Alibaba+us+Technology+Co.,+Ltd.+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="09407a7b686c65344b686b6049687f68276e68646c2767687f6c7b276a6664">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F9#+Xcl+Alibaba+us+Technology+Co.,+Ltd.(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F9#+Xcl+Alibaba+us+Technology+Co.,+Ltd.(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div class="config-section">
    <p><strong>ISP : Digitalocean, LLC (SG) </strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show vless', 'hide vless')">Show Vless</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c58cb6b7a4a0a9f887a4a7ac85a0a8a7a0aba2eba2a2a3a3ebaba0b1">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F10#Digitalocean,+LLC+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@embeng.ggff.net:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F10#Digitalocean,+LLC+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>BYU:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1d546e6f7c7871205f7c7f745d6e6d7c7e78337f6468337479">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F10#Digitalocean,+LLC+(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@space.byu.id:443?encryption=none&security=tls&sni=embeng.ggff.net&fp=randomized&type=ws&host=embeng.ggff.net&path=%2F10#Digitalocean,+LLC+(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>XCL:</h3>
                <p class="config">vless://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="064f757467636a3b4467646f466770672861676b632868677063742865696b">[email&#160;protected]</a>:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F10#+Xcl+Digitalocean,+LLC(SG)</p>
                <button class="button" onclick='copyToClipboard("vless://Israel=Babi@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.embeng.ggff.net&fp=randomized&type=ws&host=ava.game.naver.com.embeng.ggff.net&path=%2F10#+Xcl+Digitalocean,+LLC(SG)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />

        </div>
        <div id="clash" class="content">
            <div style="display: none;">
   <textarea id="clashTls/1">- name: Incapsula INC (US)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /1
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/1">- name: Incapsula INC (US)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /1
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Incapsula INC (US)</strong> </p>
    <p><strong>NEGARA :</strong> United States</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Incapsula INC (US)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /1
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/1")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Incapsula INC (US)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /1
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/1")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/2">- name: Akamai Technologies, Inc. (US)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /2
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/2">- name: Akamai Technologies, Inc. (US)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /2
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Akamai Technologies, Inc. (US)</strong> </p>
    <p><strong>NEGARA :</strong> United States</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Akamai Technologies, Inc. (US)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /2
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/2")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Akamai Technologies, Inc. (US)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /2
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/2")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/3">- name: Oracle Corporation (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /3
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/3">- name: Oracle Corporation (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /3
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Oracle Corporation (SG)</strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Oracle Corporation (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /3
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/3")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Oracle Corporation (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /3
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/3")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/4">- name: Amazon.com, Inc. (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /4
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/4">- name: Amazon.com, Inc. (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /4
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Amazon.com, Inc. (SG)</strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Amazon.com, Inc. (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /4
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/4")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Amazon.com, Inc. (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /4
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/4")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/5">- name: Google LLC (ID)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /5
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/5">- name: Google LLC (ID)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /5
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Google LLC (ID)</strong> </p>
    <p><strong>NEGARA :</strong> Indonesia</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Google LLC (ID)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /5
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/5")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Google LLC (ID)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /5
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/5")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/6">- name: Akamai Technologies, Inc. (ID)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /6
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/6">- name: Akamai Technologies, Inc. (ID)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /6
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Akamai Technologies, Inc. (ID)</strong> </p>
    <p><strong>NEGARA :</strong> Indonesia</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Akamai Technologies, Inc. (ID)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /6
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/6")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Akamai Technologies, Inc. (ID)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /6
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/6")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/7">- name: Ifog GmbH (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /7
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/7">- name: Ifog GmbH (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /7
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Ifog GmbH (SG)</strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Ifog GmbH (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /7
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/7")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Ifog GmbH (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /7
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/7")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/8">- name: Digitalocean, LLC (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /8
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/8">- name: Digitalocean, LLC (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /8
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Digitalocean, LLC (SG)</strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Digitalocean, LLC (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /8
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/8")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Digitalocean, LLC (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /8
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/8")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/9">- name: Alibaba us Technology Co., Ltd. (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /9
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/9">- name: Alibaba us Technology Co., Ltd. (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /9
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Alibaba us Technology Co., Ltd. (SG)</strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Alibaba us Technology Co., Ltd. (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /9
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/9")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Alibaba us Technology Co., Ltd. (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /9
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/9")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />
<div style="display: none;">
   <textarea id="clashTls/10">- name: Digitalocean, LLC (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /10
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div style="display: none;">
   <textarea id="clashByu/10">- name: Digitalocean, LLC (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /10
    headers:
      Host: embeng.ggff.net</textarea>
 </div>
<div class="config-section">
    <p><strong>ISP:Digitalocean, LLC (SG)</strong> </p>
    <p><strong>NEGARA :</strong> Singapore</p>
    <hr />
    <div class="config-toggle">
        <button class="button" onclick="toggleConfig(this, 'show clash', 'hide clash')">Show Clash</button>
        <div class="config-content">
            <div class="config-block">
                <h3>TLS:</h3>
                <p class="config">- name: Digitalocean, LLC (SG)
  server: embeng.ggff.net
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /10
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashTls/10")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            <hr />
            <div class="config-block">
                <h3>Byu:</h3>
                <p class="config">- name: Digitalocean, LLC (SG)
  server: space.byu.id
  port: 443
  type: vless
  uuid: Israel=Babi
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: embeng.ggff.net
  ws-opts:
    path: /10
    headers:
      Host: embeng.ggff.net</p>
                <button class="button" onclick='copyClash("clashByu/10")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
        </div>
    </div>
</div>
<hr class="config-divider" />

        </div>
           <div class="watermark">📞 <a href="https://t.me/freegazaok" target="_blank">Embeng</a></div>
    </div>
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
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
            alertBox.style.backgroundColor = '#EDE8D0';
            alertBox.style.color = '#fff';
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
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const proxyStatus = data.proxyStatus || "Unknown status";
            const alertBox = document.createElement('div');
            alertBox.textContent = `Proxy Status: ${proxyStatus}`;
            alertBox.style.position = 'fixed';
            alertBox.style.bottom = '20px';
            alertBox.style.right = '20px';
            alertBox.style.backgroundColor = '#EDE8D0';
            alertBox.style.color = '#fff';
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
                    alertBox.style.backgroundColor = '#EDE8D0';
                    alertBox.style.color = '#fff';
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
    </script>
</body>
</html>



    `;
}



export default {
    /**
     * @param {import("@cloudflare/workers-types").Request} request
     * @param {{UUID: string, พร็อกซีไอพี: string, DNS_RESOLVER_URL: string, NODE_ID: int, API_HOST: string, API_TOKEN: string}} env
     * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
     * @returns {Promise<Response>}
     */
    async fetch(request, env, ctx) {
        try {
            userID = env.UUID || userID;
            พร็อกซีไอพี = env.PROXYIP || พร็อกซีไอพี;
            dohURL = env.DNS_RESOLVER_URL || dohURL;
            let userID_Path = userID;
            if (userID.includes(',')) {
                userID_Path = userID.split(',')[0];
            }
            const upgradeHeader = request.headers.get('Upgrade');
            
            // 检查请求路径
            const url = new URL(request.url);
            
            // 检查是否为根路径的直接访问
            if (url.pathname === '/') {
                return new Response(homePageHTML(), {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                    },
                });
            }
            
            // 检查是否为 WebSocket 升级请求
            if (!upgradeHeader || upgradeHeader !== 'websocket') {
                switch (url.pathname) {
                    case `/cf`: {
                        // 返回请求的 Cloudflare 对象信息
                        return new Response(JSON.stringify(request.cf, null, 4), {
                            status: 200,
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                            },
                        });
                    }
                    case `/${userID_Path}`: {
                        // 返回生成的 vless 配置信息
                        const วเลสConfig = getวเลสConfig(userID, request.headers.get('Host'));
                        return new Response(`${วเลสConfig}`, {
                            status: 200,
                            headers: {
                                "Content-Type": "text/html; charset=utf-8",
                            }
                        });
                    }
                    case `/sub/${userID_Path}`: {
                        // 返回 vless 订阅信息
                        const วเลสSubConfig = สร้างวเลสSub(userID, request.headers.get('Host'));
                        return new Response(btoa(วเลสSubConfig), {
                            status: 200,
                            headers: {
                                "Content-Type": "text/plain;charset=utf-8",
                            }
                        });
                    }
                    case `/bestip/${userID_Path}`: {
                        // 请求最佳 IP 地址配置并返回
                        const headers = request.headers;
                        const url = `https://sub.xf.free.hr/auto?host=${request.headers.get('Host')}&uuid=${userID}&path=/`;
                        const bestSubConfig = await fetch(url, { headers: headers });
                        return bestSubConfig;
                    }
                    default:
                        // 对于其他路径，进行反向代理请求到随机网站
                        const randomHostname = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)];
                        const newHeaders = new Headers(request.headers);
                        newHeaders.set('cf-connecting-ip', '1.2.3.4');
                        newHeaders.set('x-forwarded-for', '1.2.3.4');
                        newHeaders.set('x-real-ip', '1.2.3.4');
                        newHeaders.set('referer', 'https://www.google.com/search?q=BEDEBAH');
                        
                        // 构造代理请求
                        const proxyUrl = 'https://' + randomHostname + url.pathname + url.search;
                        let modifiedRequest = new Request(proxyUrl, {
                            method: request.method,
                            headers: newHeaders,
                            body: request.body,
                            redirect: 'manual',
                        });
                        
                        // 发送代理请求并处理重定向
                        const proxyResponse = await fetch(modifiedRequest, { redirect: 'manual' });
                        if ([301, 302].includes(proxyResponse.status)) {
                            return new Response(`Redirects to ${randomHostname} are not allowed.`, {
                                status: 403,
                                statusText: 'Forbidden',
                            });
                        }
                        
                        // 返回代理服务器的响应
                        return proxyResponse;
                }
            } else {
                // 处理 WebSocket 请求
                return await วเลสOverWSHandler(request);
            }
        } catch (err) {
            /** @type {Error} */ let e = err;
            return new Response(e.toString());
        }
    },
};

export async function uuid_validator(request) {
	const hostname = request.headers.get('Host');
	const currentDate = new Date();

	const subdomain = hostname.split('.')[0];
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;

	// const daliy_sub = formattedDate + subdomain
	const hashHex = await hashHex_f(subdomain);
	// subdomain string contains timestamps utc and uuid string TODO.
	console.log(hashHex, subdomain, formattedDate);
}

export async function hashHex_f(string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(string);
	const hashBuffer = await crypto.subtle.digest('SHA-256', data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

/**
 * Handles วเลส over WebSocket requests by creating a WebSocket pair, accepting the WebSocket connection, and processing the วเลส header.
 * @param {import("@cloudflare/workers-types").Request} request The incoming request object.
 * @returns {Promise<Response>} A Promise that resolves to a WebSocket response object.
 */
async function วเลสOverWSHandler(request) {
	const webSocketPair = new WebSocketPair();
	const [client, webSocket] = Object.values(webSocketPair);
	webSocket.accept();

	let address = '';
	let portWithRandomLog = '';
	let currentDate = new Date();
	const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
		console.log(`[${currentDate} ${address}:${portWithRandomLog}] ${info}`, event || '');
	};
	const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';

	const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

	/** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
	let remoteSocketWapper = {
		value: null,
	};
	let udpStreamWrite = null;
	let isDns = false;

	// ws --> remote
	readableWebSocketStream.pipeTo(new WritableStream({
		async write(chunk, controller) {
			if (isDns && udpStreamWrite) {
				return udpStreamWrite(chunk);
			}
			if (remoteSocketWapper.value) {
				const writer = remoteSocketWapper.value.writable.getWriter()
				await writer.write(chunk);
				writer.releaseLock();
				return;
			}

			const {
				hasError,
				message,
				portRemote = 443,
				addressRemote = '',
				rawDataIndex,
				วเลสVersion = new Uint8Array([0, 0]),
				isUDP,
			} = processวเลสHeader(chunk, userID);
			address = addressRemote;
			portWithRandomLog = `${portRemote} ${isUDP ? 'udp' : 'tcp'} `;
			if (hasError) {
				// controller.error(message);
				throw new Error(message); // cf seems has bug, controller.error will not end stream
			}

			// If UDP and not DNS port, close it
			if (isUDP && portRemote !== 53) {
				throw new Error('UDP proxy only enabled for DNS which is port 53');
				// cf seems has bug, controller.error will not end stream
			}

			if (isUDP && portRemote === 53) {
				isDns = true;
			}

			// ["version", "附加信息长度 N"]
			const วเลสResponseHeader = new Uint8Array([วเลสVersion[0], 0]);
			const rawClientData = chunk.slice(rawDataIndex);

			// TODO: support udp here when cf runtime has udp support
			if (isDns) {
				const { write } = await handleUDPOutBound(webSocket, วเลสResponseHeader, log);
				udpStreamWrite = write;
				udpStreamWrite(rawClientData);
				return;
			}
			handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log);
		},
		close() {
			log(`readableWebSocketStream is close`);
		},
		abort(reason) {
			log(`readableWebSocketStream is abort`, JSON.stringify(reason));
		},
	})).catch((err) => {
		log('readableWebSocketStream pipeTo error', err);
	});

	return new Response(null, {
		status: 101,
		webSocket: client,
	});
}

/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket 
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} วเลสResponseHeader The วเลส response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log,) {

	/**
	 * Connects to a given address and port and writes data to the socket.
	 * @param {string} address The address to connect to.
	 * @param {number} port The port to connect to.
	 * @returns {Promise<import("@cloudflare/workers-types").Socket>} A Promise that resolves to the connected socket.
	 */
	async function connectAndWrite(address, port) {
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

	/**
	 * Retries connecting to the remote address and port if the Cloudflare socket has no incoming data.
	 * @returns {Promise<void>} A Promise that resolves when the retry is complete.
	 */
	async function retry() {
		const tcpSocket = await connectAndWrite(พร็อกซีไอพี || addressRemote, portRemote)
		tcpSocket.closed.catch(error => {
			console.log('retry tcpSocket closed error', error);
		}).finally(() => {
			safeCloseWebSocket(webSocket);
		})
		remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, null, log);
	}

	const tcpSocket = await connectAndWrite(addressRemote, portRemote);

	// when remoteSocket is ready, pass to websocket
	// remote--> ws
	remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, retry, log);
}

/**
 * Creates a readable stream from a WebSocket server, allowing for data to be read from the WebSocket.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocketServer The WebSocket server to create the readable stream from.
 * @param {string} earlyDataHeader The header containing early data for WebSocket 0-RTT.
 * @param {(info: string)=> void} log The logging function.
 * @returns {ReadableStream} A readable stream that can be used to read data from the WebSocket.
 */
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
	let readableStreamCancel = false;
	const stream = new ReadableStream({
		start(controller) {
			webSocketServer.addEventListener('message', (event) => {
				const message = event.data;
				controller.enqueue(message);
			});

			webSocketServer.addEventListener('close', () => {
				safeCloseWebSocket(webSocketServer);
				controller.close();
			});

			webSocketServer.addEventListener('error', (err) => {
				log('webSocketServer has error');
				controller.error(err);
			});
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
			log(`ReadableStream was canceled, due to ${reason}`)
			readableStreamCancel = true;
			safeCloseWebSocket(webSocketServer);
		}
	});

	return stream;
}

// https://xtls.github.io/development/protocols/วเลส.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 * Processes the วเลส header buffer and returns an object with the relevant information.
 * @param {ArrayBuffer} วเลสBuffer The วเลส header buffer to process.
 * @param {string} userID The user ID to validate against the UUID in the วเลส header.
 * @returns {{
 *  hasError: boolean,
 *  message?: string,
 *  addressRemote?: string,
 *  addressType?: number,
 *  portRemote?: number,
 *  rawDataIndex?: number,
 *  วเลสVersion?: Uint8Array,
 *  isUDP?: boolean
 * }} An object with the relevant information extracted from the วเลส header buffer.
 */
function processวเลสHeader(วเลสBuffer, userID) {
	if (วเลสBuffer.byteLength < 24) {
		return {
			hasError: true,
			message: 'invalid data',
		};
	}

	const version = new Uint8Array(วเลสBuffer.slice(0, 1));
	let isValidUser = false;
	let isUDP = false;
	const slicedBuffer = new Uint8Array(วเลสBuffer.slice(1, 17));
	const slicedBufferString = stringify(slicedBuffer);
	// check if userID is valid uuid or uuids split by , and contains userID in it otherwise return error message to console
	const uuids = userID.includes(',') ? userID.split(",") : [userID];
	// uuid_validator(hostName, slicedBufferString);


	// isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim());
	isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim()) || uuids.length === 1 && slicedBufferString === uuids[0].trim();

	console.log(`userID: ${slicedBufferString}`);

	if (!isValidUser) {
		return {
			hasError: true,
			message: 'invalid user',
		};
	}

	const optLength = new Uint8Array(วเลสBuffer.slice(17, 18))[0];
	//skip opt for now

	const command = new Uint8Array(
		วเลสBuffer.slice(18 + optLength, 18 + optLength + 1)
	)[0];

	// 0x01 TCP
	// 0x02 UDP
	// 0x03 MUX
	if (command === 1) {
		isUDP = false;
	} else if (command === 2) {
		isUDP = true;
	} else {
		return {
			hasError: true,
			message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`,
		};
	}
	const portIndex = 18 + optLength + 1;
	const portBuffer = วเลสBuffer.slice(portIndex, portIndex + 2);
	// port is big-Endian in raw data etc 80 == 0x005d
	const portRemote = new DataView(portBuffer).getUint16(0);

	let addressIndex = portIndex + 2;
	const addressBuffer = new Uint8Array(
		วเลสBuffer.slice(addressIndex, addressIndex + 1)
	);

	// 1--> ipv4  addressLength =4
	// 2--> domain name addressLength=addressBuffer[1]
	// 3--> ipv6  addressLength =16
	const addressType = addressBuffer[0];
	let addressLength = 0;
	let addressValueIndex = addressIndex + 1;
	let addressValue = '';
	switch (addressType) {
		case 1:
			addressLength = 4;
			addressValue = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			).join('.');
			break;
		case 2:
			addressLength = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + 1)
			)[0];
			addressValueIndex += 1;
			addressValue = new TextDecoder().decode(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			break;
		case 3:
			addressLength = 16;
			const dataView = new DataView(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				ipv6.push(dataView.getUint16(i * 2).toString(16));
			}
			addressValue = ipv6.join(':');
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
		วเลสVersion: version,
		isUDP,
	};
}


/**
 * Converts a remote socket to a WebSocket connection.
 * @param {import("@cloudflare/workers-types").Socket} remoteSocket The remote socket to convert.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to connect to.
 * @param {ArrayBuffer | null} วเลสResponseHeader The วเลส response header.
 * @param {(() => Promise<void>) | null} retry The function to retry the connection if it fails.
 * @param {(info: string) => void} log The logging function.
 * @returns {Promise<void>} A Promise that resolves when the conversion is complete.
 */
async function remoteSocketToWS(remoteSocket, webSocket, วเลสResponseHeader, retry, log) {
	// remote--> ws
	let remoteChunkCount = 0;
	let chunks = [];
	/** @type {ArrayBuffer | null} */
	let วเลสHeader = วเลสResponseHeader;
	let hasIncomingData = false; // check if remoteSocket has incoming data
	await remoteSocket.readable
		.pipeTo(
			new WritableStream({
				start() {
				},
				/**
				 * 
				 * @param {Uint8Array} chunk 
				 * @param {*} controller 
				 */
				async write(chunk, controller) {
					hasIncomingData = true;
					remoteChunkCount++;
					if (webSocket.readyState !== WS_READY_STATE_OPEN) {
						controller.error(
							'webSocket.readyState is not open, maybe close'
						);
					}
					if (วเลสHeader) {
						webSocket.send(await new Blob([วเลสHeader, chunk]).arrayBuffer());
						วเลสHeader = null;
					} else {
						// console.log(`remoteSocketToWS send chunk ${chunk.byteLength}`);
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
			console.error(
				`remoteSocketToWS has exception `,
				error.stack || error
			);
			safeCloseWebSocket(webSocket);
		});

	// seems is cf connect socket have error,
	// 1. Socket.closed will have error
	// 2. Socket.readable will be close without any data coming
	if (hasIncomingData === false && retry) {
		log(`retry`)
		retry();
	}
}

/**
 * Decodes a base64 string into an ArrayBuffer.
 * @param {string} base64Str The base64 string to decode.
 * @returns {{earlyData: ArrayBuffer|null, error: Error|null}} An object containing the decoded ArrayBuffer or null if there was an error, and any error that occurred during decoding or null if there was no error.
 */
function base64ToArrayBuffer(base64Str) {
	if (!base64Str) {
		return { earlyData: null, error: null };
	}
	try {
		// go use modified Base64 for URL rfc4648 which js atob not support
		base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
		const decode = atob(base64Str);
		const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
		return { earlyData: arryBuffer.buffer, error: null };
	} catch (error) {
		return { earlyData: null, error };
	}
}

/**
 * Checks if a given string is a valid UUID.
 * Note: This is not a real UUID validation.
 * @param {string} uuid The string to validate as a UUID.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
function isValidUUID(uuid) {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}

const WS_READY_STATE_OPEN = 1;
const WS_READY_STATE_CLOSING = 2;
/**
 * Closes a WebSocket connection safely without throwing exceptions.
 * @param {import("@cloudflare/workers-types").WebSocket} socket The WebSocket connection to close.
 */
function safeCloseWebSocket(socket) {
	try {
		if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
			socket.close();
		}
	} catch (error) {
		console.error('safeCloseWebSocket error', error);
	}
}

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
	byteToHex.push((i + 256).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
	const uuid = unsafeStringify(arr, offset);
	if (!isValidUUID(uuid)) {
		throw TypeError("Stringified UUID is invalid");
	}
	return uuid;
}


/**
 * Handles outbound UDP traffic by transforming the data into DNS queries and sending them over a WebSocket connection.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket connection to send the DNS queries over.
 * @param {ArrayBuffer} วเลสResponseHeader The วเลส response header.
 * @param {(string) => void} log The logging function.
 * @returns {{write: (chunk: Uint8Array) => void}} An object with a write method that accepts a Uint8Array chunk to write to the transform stream.
 */
async function handleUDPOutBound(webSocket, วเลสResponseHeader, log) {

	let isวเลสHeaderSent = false;
	const transformStream = new TransformStream({
		start(controller) {

		},
		transform(chunk, controller) {
			// udp message 2 byte is the the length of udp data
			// TODO: this should have bug, beacsue maybe udp chunk can be in two websocket message
			for (let index = 0; index < chunk.byteLength;) {
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

	// only handle dns udp for now
	transformStream.readable.pipeTo(new WritableStream({
		async write(chunk) {
			const resp = await fetch(dohURL, // dns server url
				{
					method: 'POST',
					headers: {
						'content-type': 'application/dns-message',
					},
					body: chunk,
				})
			const dnsQueryResult = await resp.arrayBuffer();
			const udpSize = dnsQueryResult.byteLength;
			// console.log([...new Uint8Array(dnsQueryResult)].map((x) => x.toString(16)));
			const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
			if (webSocket.readyState === WS_READY_STATE_OPEN) {
				log(`doh success and dns message length is ${udpSize}`);
				if (isวเลสHeaderSent) {
					webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
				} else {
					webSocket.send(await new Blob([วเลสResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
					isวเลสHeaderSent = true;
				}
			}
		}
	})).catch((error) => {
		log('dns udp has error' + error)
	});

	const writer = transformStream.writable.getWriter();

	return {
		/**
		 * 
		 * @param {Uint8Array} chunk 
		 */
		write(chunk) {
			writer.write(chunk);
		}
	};
}

const at = 'QA==';
const pt = 'dmxlc3M=';
const ed = 'RUR0dW5uZWw=';
/**
 *
 * @param {string} userID - single or comma separated userIDs
 * @param {string | null} hostName
 * @returns {string}
 */
function getวเลสConfig(userIDs, hostName) {
	const commonUrlPart = `:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=/vl=35.219.15.90#${hostName}`;
	const hashSeparator = "____________________________________________";

	// Split the userIDs into an array
	const userIDArray = userIDs.split(",");

	// Prepare output string for each userID
	const output = userIDArray.map((userID) => {
		const วเลสMain = atob(pt) + '://' + userID + atob(at) + hostName + commonUrlPart;
		const วเลสSec = atob(pt) + '://' + userID + atob(at) + พร็อกซีไอพี + commonUrlPart;
		return `<h2>UUID: ${userID}</h2>${hashSeparator}\nv2ray default ip
---------------------------------------------------------------
${วเลสMain}
<button onclick='copyToClipboard("${วเลสMain}")'><i class="fa fa-clipboard"></i> COPY</button>
---------------------------------------------------------------
v2ray with bestip
---------------------------------------------------------------
${วเลสSec}
<button onclick='copyToClipboard("${วเลสSec}")'><i class="fa fa-clipboard"></i> COPY</button>
---------------------------------------------------------------`;
	}).join('\n');
	const sublink = `https://${hostName}/sub/${userIDArray[0]}?format=clash`
	const subbestip = `https://${hostName}/bestip/${userIDArray[0]}`;
	const clash_link = `https://api.v1.mk/sub?target=clash&url=${encodeURIComponent(sublink)}&insert=false&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
	// Prepare header string
	const header = `
<b style='font-size: 15px;'>BEDEBAH TUNNEL</b>
<a href='https://github.com/win877969/cf-ws' target='_blank'>BEDEBAH - https://github.com/win877969/cf-ws</a>

>>CLASH<<;

	// HTML Head with CSS and FontAwesome library
	const htmlHead = 

  `;

	// Join output with newlines, wrap inside <html> and <body>
	return `
  <html>
  ${htmlHead}
  <body>
<body>
	<!-- Modal -->
	<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2>User Agreement</h2>
			<p></p>
			<ol>
			</ol>
			<p><strong>DILARANG MEMPER JUAL BELIKAN TANPA SE IZIN ADMIN!!!</strong></p>
			<label><input type="checkbox" id="agreementCheckbox"> I agree to the terms and conditions</label>
			<button id="agreeButton" class="modal-button" disabled>Agree</button>
		</div>
	</div>

	<div class="container">
		<h1>BEDEBAH BMKG.XYZ</h1>
		<p>Free Vless LifeTime By: cf-prem.bmkg.xyz</p>
		
		<!-- Theme and Language Switcher -->
		<div class="theme-switcher">
			<button class="theme-button" data-theme="light">Light</button>
			<button class="theme-button" data-theme="dark">Dark</button>
			<button class="theme-button" data-theme="gold">Gold</button>
			<button class="theme-button" data-theme="purple">Purple</button>
		</div>
  <pre style='background-color: transparent; border: none;'>${header}</pre>
  <pre>${output}</pre>
  </body>
  <script>
	function copyToClipboard(text) {
	  navigator.clipboard.writeText(text)
		.then(() => {
		  alert("Copied to clipboard");
		})
		.catch((err) => {
		  console.error("Failed to copy to clipboard:", err);
		});
	}
  </script>
  </html>`;
}

const เซ็ตพอร์ตHttp = new Set([80, 8080, 8880, 2052, 2086, 2095, 2082]);
const เซ็ตพอร์ตHttps = new Set([443, 8443, 2053, 2096, 2087, 2083]);

function สร้างวเลสSub(ไอดีผู้ใช้_เส้นทาง, ชื่อโฮสต์) {
	const อาร์เรย์ไอดีผู้ใช้ = ไอดีผู้ใช้_เส้นทาง.includes(',') ? ไอดีผู้ใช้_เส้นทาง.split(',') : [ไอดีผู้ใช้_เส้นทาง];
	const ส่วนUrlทั่วไปHttp = `?encryption=none&security=none&fp=random&type=ws&host=${ชื่อโฮสต์}&path=/vl=35.219.15.90#`;
	const ส่วนUrlทั่วไปHttps = `?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=random&type=ws&host=${ชื่อโฮสต์}&path=/vl=35.219.15.90#`;

	const ผลลัพธ์ = อาร์เรย์ไอดีผู้ใช้.flatMap((ไอดีผู้ใช้) => {
		const การกำหนดค่าHttp = Array.from(เซ็ตพอร์ตHttp).flatMap((พอร์ต) => {
			if (!ชื่อโฮสต์.includes('pages.dev')) {
				const ส่วนUrl = `${ชื่อโฮสต์}-HTTP-${พอร์ต}`;
				const วเลสหลักHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl;
				return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
					const วเลสรองHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
					return [วเลสหลักHttp, วเลสรองHttp];
				});
			}
			return [];
		});

		const การกำหนดค่าHttps = Array.from(เซ็ตพอร์ตHttps).flatMap((พอร์ต) => {
			const ส่วนUrl = `${ชื่อโฮสต์}-HTTPS-${พอร์ต}`;
			const วเลสหลักHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl;
			return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
				const วเลสรองHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
				return [วเลสหลักHttps, วเลสรองHttps];
			});
		});

		return [...การกำหนดค่าHttp, ...การกำหนดค่าHttps];
	});

	return ผลลัพธ์.join('\n');
}

const cn_hostnames = [
	'cf-prem.bmkg.xyz',              
	];
