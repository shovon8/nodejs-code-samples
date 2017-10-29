// // Example 81 : creating a basic http server
// let http = require('http');
//
// const PORT = 8080;
//
// let server = http.createServer((request, response) => {
//     response.write('Hello <strong>HTTP</strong> from Node.js');
//     response.end();
// });
//
// server.listen(PORT, () => {
//     console.log('server started at port ' + PORT);
// });














// // Example 82 - logging data about request
// let http = require('http');
//
// const PORT = 8080;
//
// let server = http.createServer((request, response) => {
//     let logString = request.method + " " + request.url + " HTTP/" + request.httpVersion;
//     console.log(logString);
//     response.write('Hello <strong>HTTP</strong> from Node.js');
//     response.end();
// });
//
// server.listen(PORT, () => {
//     console.log('server started at port ' + PORT);
// });



















// // Example 83 - logging data about request
// let http = require('http');
//
// const PORT = 8080;
//
// let server = http.createServer((request, response) => {
//     console.log(request.headers);
//     response.write('Hello <strong>HTTP</strong> from Node.js');
//     response.end();
// });
//
// server.listen(PORT, () => {
//     console.log('server started at port ' + PORT);
// });















// // Example 84 - printing http STATUS_CODES
// let http = require('http');
//
// console.log(http.STATUS_CODES);










// // Example 85 - configuring routes with http module
// let http = require('http');
// const PORT = 8080;
//
//
// let webServer = http.createServer((request, response) => {
//     if(request.url === '/about') {
//         response.end('this is the about page');
//         return;
//     }
//
//     if(request.url === '/login') {
//         response.end('this is the login page');
//         return;
//     }
//
//     response.statusCode = 404;
//     response.end('the requested page was not found on the server');
// });
//
// webServer.listen(PORT, () => {
//     console.log('the webserver has started on port ' + PORT);
// });




















// // Example 86 - setting content type
// let http = require('http');
//
// const PORT = 8080;
//
// let server = http.createServer((request, response) => {
//     response.setHeader('content-type', 'text/html');
//     response.write('Hello <strong>HTTP</strong> from Node.js');
//     response.end();
// });
//
// server.listen(PORT, () => {
//     console.log('server started at port ' + PORT);
// });