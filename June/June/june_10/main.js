// codewar level 7
// codewar: series of integers from m to n
// date: june 10th, 2020

function generateIntegers(m, n) {
    var arr = [];
    while(m <= n) {
      arr.push(m);
      m++;
    }
    return arr;
  }