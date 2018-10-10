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

// === Task 1 - 178 b ===

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

console.log('Arrays of 3s and n5: ', natur(50));