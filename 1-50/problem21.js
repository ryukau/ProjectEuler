// sum of proper divisors.
function d(n) {
  var divisor = findDivisor(n)
  var sum = 0
  for (var i = 0; i < divisor.length; ++i) {
    sum += divisor[i]
  }
  return sum + 1
}

function isAmicableNumber(n) {
  var m = d(n)
  if (n === d(m) && n !== m) {
    return true
  }
  return false
}
console.log(d(6))

var sum = 0
for (var n = 1; n <= 10000; ++n) {
  if (isAmicableNumber(n)) {
    sum += n
    console.log(n)
  }
}
console.log(sum)
