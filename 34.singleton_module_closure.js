// Example 145 - Singleton
var Config = (function Config_Singleton() {
    var config = {
        DocumentRoot: "/home/shovon/Public/html",
        IndexPageName: 'index',
        IndexPageExtension: 'js',
        Parser: 'JHTML'
    };

    return config;
})();



console.log("Before Update:");
console.log(Config.DocumentRoot);
console.log(Config.IndexPageExtension);
console.log(Config.Parser);



Config.DocumentRoot = "/var/www";
Config.Parser = 'BASIC_HTML';
Config.IndexPageExtension = "html";

console.log("\nAfter Update:");

console.log(Config.DocumentRoot);
console.log(Config.IndexPageExtension);
console.log(Config.Parser);