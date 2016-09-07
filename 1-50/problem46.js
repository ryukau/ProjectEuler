const limit = 1000000

var primes = []
for (var n = 2; n < limit; n = nextPrime(n)) {
  primes.push(n)
}

var squares = []
var sq = 1
for (var root = 1; sq < limit; ++root) {
  sq = 2 * root * root
  squares.push(sq)
}

console.log(primes, squares)

function check(n) {
  for (var i = 0; i < primes.length; ++i) {
    for (var j = 0; j < squares.length; ++j) {
      if (primes[i] + squares[j] === n) {
        return true
      }
    }
  }
  return false
}

for (var n = 9; n < limit; n += 2) {
  if (isPrime(n)) {
    continue
  }

  if (check(n)) {
    continue
  }
  console.log(n)
  break
}