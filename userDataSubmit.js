
const qS = require("querystring");
function userDataSubmit(req, resp) {
    let dataarray = [];
    req.on("data", (chunk) => {
        dataarray.push(chunk);
    });
    req.on("end", () => {
        let rawdata = Buffer.concat(dataarray).toString();
        let readdata = qS.parse(rawdata);
        resp.write(`<h1>${readdata.n}</h1>`);
        resp.write(`<h1>${readdata.n1}</h1>`);
        console.log(readdata);

        resp.end();
    });

};
module.exports = userDataSubmit;