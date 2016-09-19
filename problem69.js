// 遅い。たぶん O(n^3)。
function eulersTotient1(n) {
  var sum = 1
  for (var m = 2; m < n; ++m) {
    if (gcd(n, m) === 1) {
      ++sum
    }
  }
  return sum
}

// d = divisor.length とすると、たぶんO(nd)。
function eulersTotient2(n) {
  var divisor = findDivisor(n)
  var set = new Set()
  for (var i = 0; i < divisor.length; ++i) {
    var a = divisor[i]
    while (a < n) {
      set.add(a)
      a += divisor[i]
    }
  }
  return n - set.size - 1
}

// まともに動く。
function eulersTotient(n) {
  var divisor = findDivisor(n)
  if (divisor.length <= 0) {
    return n - 1
  }
  var primes = divisor.filter((element) => isPrime(element))
  var product = n
  for (var i = 0; i < primes.length; ++i) {
    product *= (1 - 1 / primes[i])
  }
  return Math.round(product)
}

var max = 0
var index = 0
for (var i = 2; i <= 1000000; ++i) {
  var phi = eulersTotient(i)
  var value = i / phi
  // console.log(i, phi, value)
  if (max < value) {
    max = value
    index = i
  }
}
console.log(index, max)
