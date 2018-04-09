// // Example 331 - In JS objects property are not copied like it does in
// // real Object Oriented Programming Language
// function extend(source, destination) {
//     for(var key in source) {
//         if(!(key in destination)) { // if key is not available in destination
//             destination[key] = source[key];
//         }
//     }
//
//
//     return destination;
// }
//
//
//
//
// var File = {
//     name: 'hello',
//     size: 4545144,
//     extension: 'mp3',
//     getName: function() {
//         return this.name + '.' + this.extension;
//     },
//     description: function() {
//         console.log('FileName:', this.getName());
//         console.log('FileType:', this.extension);
//         console.log('FileSize:', this.size);
//     }
// };
//
//
// // extending File
// var MusicFile = extend(File, {
//     length: 356,
//     play: function () {
//         console.log("playing " + this.getName());
//     },
//     description: function() {
//         File.description.call(this);
//         console.log('Length:', this.length);
//     }
// });
//
//
// File.description();
// MusicFile.description();


























// Example 332 - Traditional JS Classes
function File() {
    this.name = 'hello';
    this.extension = 'mp3';
    this.size = 45454;

    this.getName = function() {
        return this.name + '.' + this.extension;
    }

    this.description = function() {
        console.log('FileName:', this.getName());
        console.log('FileType:', this.extension);
        console.log('FileSize:', this.size);
    };
}


function MusicFile() {
    var musicFile = new File();

    musicFile.length = 545;

    // save a reference to Vehicle::description
    fileDescription = musicFile.description;

    // Vehicle::description override
    musicFile.description = function() {
        fileDescription.call(this);

        console.log('Length:', this.length);
    };

    return musicFile;
};


var genericFile = new File();
genericFile.description();
console.log();

var helloMusic = new MusicFile();

helloMusic.description();




