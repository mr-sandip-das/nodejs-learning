const http = require("http");
const userForm = require("./userFrom");
const userDataSubmit = require("./userDataSubmit");
http.createServer((req, resp) => {
    if (req.url == "/") {
        userForm(req, resp);
    }
    else if (req.url == "/submit") {
        userDataSubmit(req, resp);
    }
}).listen(5000);