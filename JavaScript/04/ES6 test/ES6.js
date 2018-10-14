
// === Task 1 - 178 a ===
const ArrayFilter = require('./Task1');

let array = new ArrayFilter(5);
array = array.arrFill();
// array = array.odd();
console.log(array);



// === Task 2 - 178 b ===

const natur = n => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < n; i++) {
    if (i % 3 == 0) arr1 = [...arr1, i];
    if (i % 5 != 0) arr2 = [...arr2, i];
  }
  return [arr1, arr2];
}
//console.log('Arrays of 3s and n5: ', natur(50));

// === Task 3 - 178 v ===

const square = n => {
  let arr = [];
  for (let i = 0; i < n; i++) {
     if (i % 2 === 0) {
       arr = [...arr, i];
     }
  }
  return { length: arr.length, array: arr}
}
//console.log(square(10))

// === Task 4 - 554 ===

const tris = n => {
  let tri = [];
  for (let i = 1; i < n; i++) {
    let current = i * i;
    let next = (i + 1) * (i + 1);
    let sub = next - current;
    if ( Math.sqrt(sub) % 1 === 0) {
      tri = [...tri, [Math.sqrt(sub), Math.sqrt(current), Math.sqrt(next)]];
    }
  }
  return tri
}
//console.log('Pythagorean triple: \n', tris(100))

// About Pythagorean triple:
// http://www.athens.kiev.ua/pifagorovi-trijki/

// === INTERACTIVE TERMINAL ===
// process.stdout.write('Enter the array length: ');

// process.stdin.on('data', (answer) => {
//   //console.log(answer.toString());
//   console.log('Pythagorean triple: \n', tris(answer));
//   process.exit();
// });



