function isPrime(n) {
  if (n === 2) {
    return true
  }
  if (n < 2 || n % 2 === 0) {
    return false
  }
  sqrt = Math.ceil(Math.sqrt(n))
  for (var i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function nextPrime(n) {
  if (n == 2) {
    return 3
  }
  do {
    n += 2
  } while (!isPrime(n))
  return n
}

var n = 2
var sum = 0
while (n < 2000000) {
  sum += n
  n = nextPrime(n)
}
console.log(sum)