(function(ext) {
    // When Scratch closes, do this
    ext._shutdown = function() {
        // Nothing here at the moment...
    };
 
    // Tell Scratch if the extension is ready to do stuff
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}; // Status 1 = Red, Error // Status 1 = Yellow, Not Ready // Status 2 = Green, Ready
    };
 
    // Blocks to add to Scratch
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['b', '%n Is Prime?', 'prime', 3]
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
ext.prime = function(a) {
    if (a%2 === 0) {return false;} else {
var rtrn = true;
if (a>2) {
for (var i=3; i<Math.sqrt(a); i+=2) {
if (a%i===0) {rtrn=false;}
}
} else {
if (a===2) {
rtrn = true;
} else {
rtrn = false;
}
}
return rtrn;
    }
}
    // Name of Scratch Extension goes here
    ScratchExtensions.register('Prime', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
