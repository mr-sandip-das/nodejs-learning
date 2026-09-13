const http=require("http");
const fs=require("fs");
http.createServer((req,resp)=>{
    fs.readFile("html/web.html","utf-8",(err,data)=>{
        if(err){
            resp.write("Somthing is error")
            resp.end();
            return;
        }
        resp.setHeader("content-type","text/html");
        // resp.writeHead(200,{"Content-Type":"text/html"});
        resp.write(data);
        resp.end();
    })
    
}).listen(3000);