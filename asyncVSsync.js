// console.log("apple1");
// setTimeout(()=>{
// console.log("apple2");
// },0);

// console.log("apple3");

const fs = require("fs");
fs.readFile("text/rinki.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Server error");
    }
    else {
        console.log(data);
    }
});

// let x =fs.readFileSync("text/rinki.txt","utf-8");
// console.log(x);
console.log("end script");
