function sum2(num) {
  let sum = Array.from(String(num)).map(n => Number(n)).reduce((acc, x) => acc + x);
  return sum;
}
let result = sum2(2044);
console.log(result)