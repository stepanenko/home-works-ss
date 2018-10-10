function sumOfDigits(num) {
  let split = String(num).split('');
  let sum = 0;
  for (let i=0; i<split.length; i++) {
    sum = sum + Number(split[i]);
  }
  let len = String(sum).length;
  return { value: sum, length: len }
}

console.log(sumOfDigits(34567));