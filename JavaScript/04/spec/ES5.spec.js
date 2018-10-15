var sqrt = require('./mathES5');

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
//Testing with Jasmine
describe('Generate an array:', function() {
    it('should create an array like [1, 3, ...]', function() {
        expect(nat(5)).toEqual([1, 3])
    });
});

// === Task 2 - 178 b ===

function natur(n) {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < n; i++) {
        if (i % 3 === 0) arr1 = arr1.concat(i);
        if (i % 5 === 0) arr2 = arr2.concat(i);
    }
    return [arr1, arr2];
}
// Testing Task 2 with Jasmine:
describe('Functionality of Natur():', function() {
    it('should ouput a specific arrays', function() {
        expect(natur(10)).toEqual([[0,3,6,9],[0,5]]);
        expect(natur(5)).toEqual([[0, 3],[0]]);
        expect(natur(20).length).toEqual(2);
    });
});

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

// Testing square(n) ...
describe('Function output', function() {
    it('should output quares of specific length', function() {
        expect(square(5)).toEqual({ length: 3, array: [0, 4, 16]});
        expect(square(8)).toEqual({ length: 4, array: [0, 4, 16, 36]});

    });
});

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

// Testing tris(n) ...
describe('Correct output of function', function () {
    it('should show Pythagorean triples', function() {
        expect(tris(25).length).toEqual(3);
        expect(tris(14)).toEqual([[3,4,5],[5,12,13]]);
    });
});
