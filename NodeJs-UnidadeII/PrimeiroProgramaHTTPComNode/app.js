var http = require('http');

http.createServer(function(req,res){
    res.end("Hello World! Welcome to my first HTTP server!");
}).listen(8081);
console.log("Server running on http://localhost:8081")