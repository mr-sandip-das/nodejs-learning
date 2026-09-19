const http = require("http");
const fs = require("fs");
const qS=require("querystring");
const { log } = require("console");
http.createServer((req, resp) => {
    fs.readFile("html/from.html", "utf-8", (err, data) => {
        if (err) {
            resp.writeHead(500, { "content-type": "text/html" });
            resp.write("<h1>Somthing is wrong</h1>");
            resp.end();
            return;
        }
        else if (req.url == "/") {
            resp.write(data);
            resp.end();
        }
        else if (req.url == "/submit") {
            let dataBody=[];
            req.on("data",(chunk)=>{
               dataBody.push(chunk)
            });
            req.on('end',()=>{
                let rawData=Buffer.concat(dataBody).toString();
                let readdata=qS.parse(rawData)
                console.log(readdata.n);
                console.log(readdata.n1);
            });
            
            resp.write("<h1>Form Submited</h1>")
            resp.end();
        }
    });

     
    // resp.setHeader("content-type","text/html");
    // if(req.url=="/"){
    // resp.write(`
    // <form action="/submit" method="post">
    // <input type="name" name="n">
    // <input type="name" name="n1">
    // <button>Submit</button>
    // </form>
    // `);
    // } 
    // else if(req.url=="/submit"){
    //     resp.write("<h1>From submitated</h1>");
    // }
    // resp.end();
    
}).listen(2000);