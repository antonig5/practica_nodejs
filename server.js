const http = require("http");
const colors = require("colors");

const httpServer = function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h1>texto</h1>");
  res.end();
};

const server = http.createServer(httpServer);

server.listen(3000, function () {
  console.log("Servidor en el puerto 3000".red);
});
