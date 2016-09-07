
const N = 600851475143

// エラトステネスのふるい。遅い。
function eratosthenesSieve(number) {
  var sieve = []
  for (var n = 2; n <= number; ++n) {
    var isPrime = true
    for (var i = 0; i < sieve.length; ++i) {
      if (n % sieve[i] === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      sieve.push(n)
    }
  }
  return sieve
}

// エラトステネスのふるいその2。遅い。
function eratosthenesSieve2(n) {
  var sieve = [2]
  for (var i = 3; i <= n; i += 2) {
    sieve.push(i)
  }
  for (var i = 1; i < sieve.length; ++i) {
    for (var j = i + 1; j < sieve.length; ++j) {
      if (sieve[j] % sieve[i] === 0) {
        sieve.splice(j, 1)
        --j
      }
    }
  }
  return sieve
}

// フェルマーの小定理。Math.powで数が大きくなりすぎてInfinityがでる。
function isPrime1(n) {
  if (Math.pow(2, n - 1) % n === 1) {
    return true
  }
  return false
}

// http://judge.u-aizu.ac.jp/onlinejudge/commentary.jsp?id=ALDS1_1_C
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

function findPrime(n) {
  prime = []
  for (var i = 2; i <= n; ++i) {
    if (isPrime(n)) prime.push(i)
  }
  return prime
}

// Pollard's rho algorithm.
function pollardsRho(n) {
  var x = 2
  var y = 2
  var d = 1
  var cycleSize = 2
  while (d === 1) {
    for (var i = 0; i <= cycleSize && d <= 1; ++i) {
      x = (x * x + 1) % n
      d = gcd(x - y, n)
    }
    cycleSize *= 2
    y = x
  }
  return d
}

function gcd(m, n) {
  while (n !== 0) {
    var temp = n
    n = m % n
    m = temp
  }
  return m
}

// Omega function と組み合わせないと無限ループになる。
factor = []
function primeFactorization(n) {
  if (isPrime(n)) {
    factor.push(n)
    return
  }
  var a = pollardsRho(n)
  var b = n / a
  console.log(a, b)
  primeFactorization(a)
  primeFactorization(b)
}

// 総当たり。
function primeFactor(n) {
  if (n < 2) {
    return 1
  }
  var p = 2
  var n2 = Math.ceil(n / 2)
  var factor = []
  while (n > 1) {
    if (n % p === 0) {
      n /= p
      factor.push(p)
    }
    else {
      p = nextPrime(p)
      if (p > n2) break
    }
  }
  return factor
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

console.log(primeFactor(N))
