let d = 1, ud = 2, od = 3;

function matrix(n) {
  let array = [];
  for (let i = 0; i<n; i++) {
    let a = [];
    a.length = n;
    array = a;
    array.fill(ud);
    array.fill(od, i+1);
    array[i] = d;
    console.log(array.join('  '))
  }
  return array;
}

//matrix(10);

function display(n) {
  let array = [];
  for (let i = 0; i<n; i++) {
    let a = [];
    a.length = n;
    array = a;
    array.fill(ud);
    array.fill(od, i+1);
    array[i] = d;
    array = array.join('  ');
    console.log(array);
    document.write(array + '<br>');
  }
  return array;
}

display(6);
