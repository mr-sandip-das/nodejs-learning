const arg=process.argv;
const http=require("http");
http.createServer((req,resp)=>{
    resp.write("This is Dinamic port server page");
    resp.end();
}).listen(arg[2]);
