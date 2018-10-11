var sqrt = require('./mathES5');

const args = process.argv.slice(2);
//console.log(args); // logs terminal arguments

// === Task 1 - 178 a ===

function nat(n) {
    var arr = [];
    var array = [];
    for (var i = 0; i < n; i++) {
        arr[i] = i;
        if (i % 2 !== 0) array = array.concat(i);
    }
    return array;
}
//console.log('Array: ', nat(args[0]));

// === Task 2 - 178 b ===

function natur(n) {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < n; i++) {
        if (i % 3 === 0) arr1 = arr1.concat(i);
        if (i % 5 !== 0) arr2 = arr2.concat(i);
    }
    return [arr1, arr2];
}
module.exports.natur = natur;

// console.log('Arrays of 3s and n5: ', natur(50));

// === Task 3 - 178 v ===

function square(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr = arr.concat(i * i);
        }
    }
    return { length: arr.length, array: arr};
}
// console.log(square(10))
module.exports.square = square;

// === Task 4 - 554 Pythagorean triple ===

function tris(n) {
    var tri = [];
    for (var i = 1; i < n; i++) {
        var current = i * i;
        var next = (i + 1) * (i + 1);
        var sub = next - current;
        if (sqrt(sub) % 1 === 0) {
            tri.push([sqrt(sub), sqrt(current), sqrt(next)]);
        }
    }
    return tri;
}
//console.log('Pythagorean triples: \n', tris(100));
module.exports.tris = tris;

// About Pythagorean triple:
// http://www.athens.kiev.ua/pifagorovi-trijki/
