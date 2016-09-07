function isTruncatablePrime(n) {
  if (!isPrime(n)) {
    return false
  }

  var digit = 0
  var nn = n
  while (nn > 0) {
    nn = Math.floor(nn / 10)
    ++digit
  }

  var LR = n
  for (var i = 1; i < digit; ++i) {
    var LR = n % Math.pow(10, digit - i)
    if (!isPrime(LR)) {
      return false
    }
  }

  var RL = n
  for (var i = 1; i < digit; ++i) {
    var RL = Math.floor(RL / 10)
    if (!isPrime(RL)) {
      return false
    }
  }

  return true
}

var sum = 0
var list = []
for (var n = nextPrime(7); n < 1000000; n = nextPrime(n)) {
  if (isTruncatablePrime(n)) {
    sum += n
    list.push(n)
  }
}

console.log(sum, list)
// console.log(isTruncatablePrime(7))