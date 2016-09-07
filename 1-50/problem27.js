function solveQuadratic(a, b, c) {
  var A = b / (2 * a)
  var B = A * A - c / a
  console.log(A, B, A + B)
  if (B < 0) {
    return null
  }
  var C = Math.sqrt(B)
  return [-A + C, -A - C]
}

// n^2 + a * n + b; (n >= 0)
// b は素数。
// a は少なくとも奇数。

function quad(n, a, b) {
  return n * n + a * n + b
}

var maxN = 0
var maxA = 0
var maxB = 0

for (var a = -999; a < 1000; a += 2) {
  for (var b = 2; b < 1000; b = nextPrime(b)) {
    var n = 0
    while (isPrime(quad(n, a, b))) {
      ++n
    }
    if (n > maxN) {
      maxN = n
      maxA = a
      maxB = b
    }
  }
}

console.log(maxN, maxA, maxB, maxA * maxB)
