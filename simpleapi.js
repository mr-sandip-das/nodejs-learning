const { appendFile } = require("fs");
const http=require("http");
const userData=[
    {
        name:"Sandip Das",
        age:20,
        email:"Sandipdas.0106@gmail.com"
    },
    {
        name:"Avinandan Patra",
        age:22,
        email:"Avinandan.0106@gmail.com"
    },
    {
        name:"Ankan Bar",
        age:21,
        email:"Ankan.0106@gmail.com"
    }
];
http.createServer((rep,resp)=>{
    resp.setHeader("Content-Type","application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(3000);