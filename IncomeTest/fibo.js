function fibo(n) {
  if (n == 0) return [];
  else if (n == 1) return [0];
  else {
    let arr = [0,1];
    for (let i = 2; i<n; i++) {
      arr.push(arr[i-2] + arr[i-1]);
    }
    return arr;
  }
}

console.log(fibo(2));