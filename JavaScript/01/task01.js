// === Task 1 - 178 a ===
function nat(n) {
  const arr = [];
  const array = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    arr.push(i);
    if (i % 2 !== 0) array.push(i)
  }
  return array.length;
}

//console.log('Array length: ', nat(10));

// === Task 2 - 178 b ===

function natur(n) {
  const arr1 = [];
  const arr2 = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 == 0) arr1.push(i);
    if (i % 5 != 0) arr2.push(i);
  }
  return [arr1, arr2];
}

//console.log('Arrays of 3s and n5: ', natur(50));

// === Task 3 - 178 v ===

function square(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
     if (i % 2 === 0) {
       arr.push(i * i);
     }
  }
  return { length: arr.length, array: arr}
}
// console.log(square(10))

// === Task 4 - 554 ===

function tris(n) {
  const tri = [];
  for (let i = 1; i < n; i++) {
    let current = i * i;
    let next = (i + 1) * (i + 1);
    let sub = next - current;
    if ( Math.sqrt(sub) % 1 === 0) {
      tri.push([Math.sqrt(sub), Math.sqrt(current), Math.sqrt(next)]);
    }
  }
  return tri
}
console.log(tris(100))


// http://www.athens.kiev.ua/pifagorovi-trijki/
