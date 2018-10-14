module.exports = class ArrayFilter {

  constructor(len) {
    this.len = len;
  }

  arrFill() {
    let array = [];
    for (let i = 0; i < this.len; i++) {
      array[i] = i;
    }
    return array;
  }

  odd() {
    return this.arrFill().filter(val => val % 2 !== 0);
  }
}