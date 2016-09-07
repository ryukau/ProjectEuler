console.log(findDivisor(644))
console.log(findDivisor(645))
console.log(findDivisor(646))

var a = findDivisor(646)
a = a.filter((element, index, array) => isPrime(element))
console.log(a)

var A = []
var B = []
var C = []
var D = []
var f = 4
for (var n = 1; n < 1000000; ++n) {
  A = B
  B = C
  C = D

  D = findDivisor(n).filter((element, index, array) => isPrime(element))
  if (A.length >= f && B.length >= f && C.length >= f && D.length >= f) {
    console.log(n - 3)
    break
  }
}