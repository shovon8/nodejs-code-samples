// Example 80: url string parsing
const url = require('url');

let url1 = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(url1);