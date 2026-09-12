const h=require("http");
let x=20
server=h.createServer((req,resp)=>{
resp.setHeader("Content-Type","text/html");
resp.write("<h1>Sandip das</h1>");
resp.write("<h2>Sandip das</h2>");
resp.write("<h3>Sandip das</h3>");
resp.write("Sandip das <mark>sandip das</mark>");
resp.write(`
    <html>
    <head>
    <title>NYCTI COllege</title>
    </head>
    <body>
    <h1>Anita Das</h1>
    <h2>`+x+ `</h2>
    </body>
    </html>
    `);
resp.end();
process.exit();

});
server.listen(2000)