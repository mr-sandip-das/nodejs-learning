const http=require("http");
http.createServer((x,y)=>{
y.write("<br>Sandip Das<br>");
y.write("Amar Das ");
y.write("Ankan bar");
y.end();
}).listen(5000);


const http1=require("http");
http1.createServer((n,m)=>{
    m.write("new server create");
    m.end();
}).listen(404);
