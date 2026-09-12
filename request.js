const { log } = require("console");
const http=require("http");
http.createServer((req,resp)=>{
    if(req.url=="/")
        resp.write("<h1>Home page</h1>");
    else if(req.url=="/data")
        resp.write("<h1>Data page</h1>");  
    else
        resp.write("Error this page is not found");
resp.end();
}).listen(5000);