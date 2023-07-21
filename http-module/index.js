const http = require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    res.end("<h2> Hello From Node</h2> ")
});

server.listen(8080,()=>{
    console.log("Listening on Port 8080");
})