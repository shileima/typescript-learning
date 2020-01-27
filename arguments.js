function add() {
  let arr = Array.prototype.slice.call(arguments);
  return arr.reduce((item, res) => item * res)
}

// console.log(add(1, 2, 3, 4));

// 阶乘
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  };
}
// console.log(factorial(3));

// 尾递归优化阶乘
function factorialBetter(n, p = 1) {
  if (n == 1) {
    return p;
  } else {
    let rs = p * n;
    return factorialBetter(n - 1, rs);
  }
}
console.log(factorialBetter(4));

