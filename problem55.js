const LIMIT = 100

function isLychrelNumber(n) {
  var num = BigNum.from(n)
  for (var i = 0; i < LIMIT; ++i) {
    var r = num.slice().reverse()
    num = BigNum.add(num, r)
    if (BigNum.isPalindrome(num)) {
      return false
    }
  }
  return true
}

// console.log(BigNum.isPalindrome(BigNum.from(7337)))
// console.log(isLychrelNumber(4994))

var sum = 0
var ln = []
for (var n = 0; n < 10000; ++n) {
  if (isLychrelNumber(n)) {
    ++sum
    ln.push(n)
  }
}
console.log(sum, ln)
