/*Test project to train node.js*/
// stdout
console.log("Starting node.js test...");
// load http module and store http instance
var http = require("http");
// Create a server and pass it a function with parameters 
// request and response.
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK 
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body
    response.end('Testing node.js\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
