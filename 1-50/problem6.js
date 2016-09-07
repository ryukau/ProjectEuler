function sumSq(n) {
  var sum = (2 * n + 1) * (n + 1) * n / 6
  return sum
}

function sqSum(n) {
  var sum = n * (n + 1) / 2
  return sum * sum
}

var n = 100
console.log(sqSum(n) - sumSq(n))