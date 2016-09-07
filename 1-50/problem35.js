function isCirculerPrime(n) {
  var digit = 0
  var nn = n
  while (nn > 0) {
    nn = Math.floor(nn / 10)
    ++digit
  }

  var mul = Math.pow(10, digit - 1)
  for (var i = 0; i < digit; ++i) {
    if (!isPrime(n)) {
      return false
    }
    var remainder = n % 10
    n = Math.floor(n / 10) + remainder * mul
  }
  return true
}

var primes = []
for (var n = 2; n < 1000000; n = nextPrime(n)) {
  primes.push(n)
}

var circularPrimes = []
for (var i = 0; i < primes.length; ++i) {
  if (isCirculerPrime(primes[i])) {
    circularPrimes.push(primes[i])
  }
}

console.log(circularPrimes)