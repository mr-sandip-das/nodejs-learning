const http = require("http");
const fs = require("fs");

http.createServer((req, resp) => {

    // ===== header====
    
    // let HedarData="";
    // fs.readFile("html/header.html", "utf-8", (err, data) => {
    //         if (err) {
    //             resp.writeHead(500, { "content-type": "text/plain" });
    //             resp.write("Heder File is not Found ERROR Messege");
    //             resp.end();
    //             return false;
    //         }
    //         HedarData=data;
    //     });

    let HedarData=fs.readFileSync("html/header.html","utf-8");
    let FooterData=fs.readFileSync("html/footer.html","utf-8");

    // ====header====
    let file="/home.html";
    if(req.url != "/")
        file=req.url;
    if (req.url != "/style.css") {
        fs.readFile("html"+file, "utf-8", (err, data) => {
            if (err) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.write("Home page File is not Found ERROR Messege");
                resp.end();
                return false;
            }
            resp.writeHead(200,{"content-type":"text/html"});
            resp.write(HedarData+""+data+""+FooterData);
            resp.end();
        });
    }
    else if(req.url=="/style.css")
        {
        fs.readFile("html/style.css", "utf-8", (err, data) => {
            if (err) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.write("style page File is not Found ERROR Messege");
                resp.end();
                return false;
            }
            resp.writeHead(200,{"content-type":"text/css"});
            resp.write(data);
            resp.end();
        });
    }

}).listen(20001);