function isPermutation(a, b) {
  var bigA = BigNum.from(a)
  var bigB = BigNum.from(b)
  if (bigA.length !== bigB.length) {
    return false
  }
  bigA.sort((a, b) => a - b)
  bigB.sort((a, b) => a - b)
  for (var i = 0; i < bigA.length; ++i) {
    if (bigA[i] !== bigB[i]) {
      return false
    }
  }
  return true
}

// console.log(isPermutation(87109, 79180))

var minValue = Number.MAX_VALUE
var minIndex = 0
for (var n = 2; n < 10000000; ++n) {
  var phi = totient(n)
  if (isPermutation(n, phi)) {
    console.log(n, phi)
    var value = n / phi
    if (minValue > value) {
      minValue = value
      minIndex = n
    }
  }
}
console.log(minIndex, minValue)