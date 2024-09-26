(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702,800],{6533:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/run-multiple-apps-on-same-server-using-nginx",function(){return t(9800)}])},1568:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(5893),i=t(7294),a=t(4091),r=()=>{let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let n=e.current;if(n){n.innerHTML="";let e=document.createElement("ul");e.id="toc-list";let s=document.querySelector("#post-title"),i=document.querySelectorAll("h1:not(.post-title), h2, h3"),a=document.createElement("p"),r=document.createElement("a");if(s){var t;r.textContent=null!==(t=s.textContent)&&void 0!==t?t:"",r.href="#"+s.id,a.appendChild(r),e.appendChild(a)}i.forEach(n=>{var t;let s=document.createElement("li"),i=document.createElement("a");i.textContent=null!==(t=n.textContent)&&void 0!==t?t:"",i.href="#"+n.id;let a=parseInt(n.tagName.substring(1));s.style.marginLeft=20*(a-1)+"px",s.style.fontSize=16-(a-1)+"px",s.appendChild(i),e.appendChild(s)}),n.appendChild(e)}},[]),(0,s.jsx)("div",{id:"toc-sidebar",ref:e})},o=e=>{let{info:n}=e;return(0,s.jsxs)("div",{className:"blog-header",children:[(0,s.jsx)("h1",{id:"post-title",className:"post-title",children:n.title}),(0,s.jsxs)("p",{className:"blog-item-date",style:{display:"flex",margin:"0",color:"black"},children:["Date: ",n.date," | Tags: ",n.tags.map((e,n)=>(0,s.jsx)("span",{className:"blog-tag",children:e},n))]}),(0,s.jsx)("p",{className:"blog-item-description",style:{color:"gray"},children:n.description})]})},c=e=>{let{blogInfo:n,htmlString:t}=e,[c,l]=(0,i.useState)(!1);return(0,s.jsxs)("div",{className:"two-column-wrapper",children:[(0,s.jsxs)("div",{className:"main-text",children:[(0,s.jsx)("div",{className:"blog-header",children:(0,s.jsx)(o,{info:n})}),(0,s.jsx)("div",{className:"blog-content",children:(0,s.jsx)(a.Z,{htmlString:t,onRendered:()=>{l(!0)}})})]}),c?(0,s.jsx)(r,{}):null]})}},4091:function(e,n,t){"use strict";var s=t(5893),i=t(7294),a=t(7311),r=t(7951),o=t(6382),c=t(1924),l=t(8310),p=t(9538),d=t(9675);async function h(e){return(await (0,r.l)().use(o.Z,{fragment:!0}).use(c.Z).use(l.Z).use(p.Z).use(d.Z).process(e)).toString()}n.Z=e=>{let{htmlString:n,onRendered:t}=e,[r,o]=(0,i.useState)("");return(0,i.useEffect)(()=>{(async()=>{o(await h(n))})()},[n]),(0,i.useEffect)(()=>{r&&t&&t()},[r,t]),(0,s.jsx)("div",{children:(0,a.ZP)(r)})}},9800:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p},info:function(){return l}});var s=t(5893);t(7294);var i=t(7762),a=t(1568),r=t(1151);function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:["\n",(0,s.jsx)(n.h1,{children:"Intro"}),"\n",(0,s.jsx)(n.p,{children:"I want to deploy multiple hobby web projects on the same EC2 instance, since I don't want the extra cost of running each of them on a separate server."}),"\n",(0,s.jsx)(n.p,{children:"When I had just one web app running on the instance, I simply let it listen on a specific port, and that was sufficient. For multiple applications, I cannot have them directly listen on the same port on the same network interface, but I can achieve similar effect by setting up a reverse proxy such as NGINX, which will listen on a single port and then forward incoming requests to different applications based on criteria such as the domain name, URL path, or other headers."}),"\n",(0,s.jsx)(n.p,{children:"In this post, I am documenting how I set up NGINX as a reverse proxy to run two web applications on one Amazon EC2 instance."}),"\n",(0,s.jsx)(n.h1,{children:"Experimenting on local machine"}),"\n",(0,s.jsx)(n.h2,{children:"Set up proxy_pass for request routing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ sudo apt update\n$ sudo apt install nginx\n$ systemctl status nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"The service status shows active, and the nginx welcome page shows up when accessing localhost."}),"\n",(0,s.jsxs)(n.p,{children:["According to ",(0,s.jsx)(n.a,{href:"https://docs.nginx.com/nginx/admin-guide/basic-functionality/managing-configuration-files/",children:"nginx doc"}),", write a minimal configuration in ",(0,s.jsx)(n.code,{children:"/etc/nginx/nginx.conf"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"events {\n}\n\nhttp {\n        server {\n            listen 80;\n            location /app1/ {\n                proxy_pass http://127.0.0.1:3000/;\n            }\n            location /app2/ {\n                proxy_pass http://127.0.0.1:8000/;\n            }\n        }\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NOTE\n",(0,s.jsx)(n.a,{href:"https://wiki.debian.org/Nginx/DirectoryStructure",children:"The NGINX directory structure"})," explains different configuration files."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"https://stackoverflow.com/questions/19108044/nginx-routing-path-to-server"}),"\n",(0,s.jsx)(n.p,{children:"Then reload the configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ sudo systemctl reload nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Till this step, app1 can be accessed at localhost/app1, and app2 can be accessed at localhost/app2."}),"\n",(0,s.jsx)(n.h2,{children:"Serving static files"}),"\n",(0,s.jsxs)(n.p,{children:["Serving static files can be handled by NGINX or the web application. Referring to ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/46692341/express-nginx-cant-serve-static-files",children:"a discussion on Stack Overflow"}),", I set up my static file serving in the following way:"]}),"\n",(0,s.jsx)(n.h3,{children:"With Express"}),"\n",(0,s.jsx)(n.p,{children:"For app1, which uses Express framework, the static files reside in a public folder:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"app1\n├── app.js\n├── bin\n│\xa0\xa0 └── www\n├── database\n│\xa0\xa0 └── ...\n├── node_modules\n│\xa0\xa0 └── ...\n├── package.json\n├── package-lock.json\n├── public\n│\xa0\xa0 ├── images\n│\xa0\xa0 ├── javascripts\n│\xa0\xa0 ├── stylesheets\n│\xa0\xa0 └── views\n└── routes\n    └── ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Use the static file handler middleware in app definition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// app.js\napp.use(express.static('public'));\n"})}),"\n",(0,s.jsx)(n.p,{children:"And since NGINX maps '/app1/' requests to '/' in project directory of app1, static files need to be included like this in my project code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<link rel="stylesheet" href="/app1/stylesheets/style.css">\n<script src="/app1/javascripts/words.js"></script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Any redirects in project code should be modified accordingly, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'var redirect_url = "http://" + window.location.host + "/app1/endpoint";\nwindow.location.replace(redirect_url);\n'})}),"\n",(0,s.jsx)(n.h3,{children:"With Tornado"}),"\n",(0,s.jsx)(n.p,{children:"App2 is developed based on Python's Tornado web framework. Project structure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"app2\n├── compose.yaml\n├── README.md\n├── redis\n│\xa0\xa0 └── Dockerfile\n└── web\n    ├── Dockerfile\n    ├── handlers\n    ├── requirements.txt\n    ├── server.py\n    ├── static     # images, stylesheets and js files\n    ├── templates  # views\n    └── utils\n"})}),"\n",(0,s.jsx)(n.p,{children:"In my application code, templates path is defined in Dockerfile as ENV HTML_PATH=./templates, and called in the following way which does not need any modification:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'    async def get(self):\n        html_file = os.getenv("HTML_PATH") + "/index.html"\n        with open(html_file) as f:\n            self.write(f.read())\n'})}),"\n",(0,s.jsx)(n.p,{children:"But for other files in /static:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!-- In HTML -->\n<link rel="stylesheet" type="text/css" href="/app2/static/style.css" />\n<script type="text/javascript" src="/app2/static/common.js"></script>\n'})}),"\n",(0,s.jsx)(n.h2,{children:"Proxying WebSocket connections"}),"\n",(0,s.jsx)(n.p,{children:"I added a new location configuration in /etc/nginx/nginx.conf for the websocket:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"events {\n}\n\nhttp {\n    map $http_upgrade $connection_upgrade {\n        default upgrade;\n        ''      close;\n    }\n\n    server {\n        listen 80;\n\n        location /app1/ {\n            proxy_pass http://127.0.0.1:3000/;\n        }\n        location /app2/ {\n            proxy_pass http://127.0.0.1:8000/;\n        }\n\n        location /app2/ws {\n            proxy_pass http://127.0.0.1:8000/ws;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection $connection_upgrade;\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that in both ",(0,s.jsx)(n.code,{children:"/ws"})," occurrences, there is no slash at the end of the url, and in my application's routing table, the entry is defined as ",(0,s.jsx)(n.code,{children:'(r"/pubsub",  WebSocketHandler)'}),", also without a slash at the end."]}),"\n",(0,s.jsx)(n.p,{children:"Another problem I noticed is that web sockets proxyed by NGINX closes after 60 seconds of inactivity. In order to keep the websocket connection alive, I added a heartbeat function that gets called every 30 seconds sending a ping message from client to server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'setInterval(function () {\nif (document.ws && document.ws.readyState === WebSocket.OPEN) {\n    document.ws.send(JSON.stringify({\n    type: "heartbeat"\n    }));\n}\n}, 30000);\n'})}),"\n",(0,s.jsx)(n.p,{children:"References:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://websockets.readthedocs.io/en/stable/howto/nginx.html#configure-and-run-nginx",children:"Python websockets doc - configure and run nginx"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://nginx.org/en/docs/http/websocket.html",children:"NGINX doc - WebSocket proxying"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Modification in application code"}),"\n",(0,s.jsx)(n.p,{children:"Since the url has changed, I need to fix internal links, like redirecting to a different page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// new user, redirect to register page\nvar redirect_url = window.location.host + "/app1/register";\n...\n\n'})}),"\n",(0,s.jsx)(n.h1,{children:"Set up the EC2 instance"}),"\n",(0,s.jsx)(n.p,{children:"In the previous section, we already have both applications running on localhost using NGINX as a proxy. Now we just need to run it on the remote EC2 instance using basically the same steps."}),"\n",(0,s.jsx)(n.h2,{children:"Install and run NGINX"}),"\n",(0,s.jsx)(n.p,{children:"SSH into the remote server, then do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ sudo yum install nginx\n$ sudo vi /etc/nginx/nginx.conf\n"})}),"\n",(0,s.jsx)(n.p,{children:"Paste the config from previous section to nginx.conf, and activate nginx:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"events {\n}\n\nhttp {\n    map $http_upgrade $connection_upgrade {\n        default upgrade;\n        ''      close;\n    }\n\n    server {\n        listen 80;\n\n        location /app1/ {\n            proxy_pass http://127.0.0.1:3000/;\n        }\n        location /app2/ {\n            proxy_pass http://127.0.0.1:8000/;\n        }\n\n        location /app2/ws {\n            proxy_pass http://127.0.0.1:8000/ws;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection $connection_upgrade;\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ sudo systemctl start nginx\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Run the applications"}),"\n",(0,s.jsx)(n.p,{children:"Run your application. In my case, app1 listens on port 3000 and app2 listens on port 8000."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"NOTE\nFor app1 I pulled the code using git and needed to install npm."}),"\n",(0,s.jsxs)(n.p,{children:["Install Git: ",(0,s.jsx)(n.code,{children:"sudo yum install git -y"})]}),"\n",(0,s.jsxs)(n.p,{children:["Set up Node: ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html",children:"Setting up node on EC2 - AWS Doc"}),", and ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"Downloading and installing Node.js and npm"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["And here is a link explaining how to run npm continuously after logging out from ssh: ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/forever",children:"npmjs package - forever"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"That's basically it! Now the two applications can be accessed at:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"http://ec2.public.ip.address/app1"}),"\n",(0,s.jsx)(n.li,{children:"http://ec2.public.ip.address/app2"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Thanks for reading! ✨✨"})]})}let c=i.renderToString((0,s.jsx)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)},{})),l={title:"Run Multiple Apps on One EC2 Instance using NGINX",date:"2024-02-23",tags:["NGINX","AWS"],description:"This post documented how I set up NGINX as a reverse proxy to route\n     requests to multiple applications running on one single Amazon EC2 instance."};function p(){return(0,s.jsx)(a.Z,{blogInfo:l,htmlString:c})}}},function(e){e.O(0,[774,644,888,179],function(){return e(e.s=6533)}),_N_E=e.O()}]);