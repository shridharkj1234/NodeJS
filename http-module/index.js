const http = require("http");
const fs = require("fs");
const path = require("path");
const data=fs.readFileSync(__dirname + "/data.json", "utf-8")
const readHtml = fs.readFileSync(path.join(__dirname,'./public/index.html'),"utf-8")
const server = http.createServer((req, res) => {
  if (req.url === "/api") {
      console.log(data);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(readHtml);
  }
});

server.listen(8080, () => {
  console.log("Listening on Port 8080");
});
