const Math = {};
function add(x1, x2) {
  return x1 + x2;
}
function substract(x1, x2) {
  return x1 - x2;
}

function muntyple(x1, x2) {
  return x1 * x2;
}
function divide(x1, x2) {
  if (x2 == 0) {
    console.log("nose divide por cero");
  } else {
    return x1 / x2;
  }
}

Math.add = add;
Math.substract = substract;
Math.muntyple = muntyple;
Math.divide = divide;

module.exports = Math;
