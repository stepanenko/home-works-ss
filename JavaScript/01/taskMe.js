
function list(n) {
  const arr1 = [];
  const arr2 = [];
  for (let i = 1; i < n; i++) {
       arr1.push(i * i);
  }
  for (let i = 0; i < arr1.length - 1; i++) {
       arr2[i] = arr1[i + 1] - arr1[i]
  }
  return { array1: arr1, array2: arr2 }
}

console.log(list(18));

