function triangleNumber(n) {
  return n * (n + 1) / 2
}

function findDivisor(n) {
  var divisor = []
  var tSqrt = Math.sqrt(n)
  for (var i = 2; i < tSqrt; ++i) {
    if (n % i === 0) {
      divisor.push(i)
      var ni = n / i
      if (i !== (ni)) {
        divisor.push(ni)
      }
    }
  }
  return divisor
}

var divisor = []
var n = 0
for (var n = 0; n < 1000000; ++n) {
  var t = triangleNumber(n)
  var divisor = findDivisor(t)
  if (divisor.length >= 500) {
    console.log(t, n, divisor)
    break
  }
}
