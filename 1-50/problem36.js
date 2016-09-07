function isPalindrome(n, radix) {
  var reversed = 0
  var m = n
  while (n !== 0) {
    reversed = radix * reversed + n % radix
    n = Math.floor(n / radix)
  }
  if (reversed === m) {
    return true
  }
  return false
}

var sum = 0
var list = []
for (var n = 1; n < 1000000; ++n) {
  if (isPalindrome(n, 10) && isPalindrome(n, 2)) {
    sum += n
    list.push(n)
  }
}

console.log(sum, list)