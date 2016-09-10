// 素数かどうかを判定。
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

// 素数nの次の素数を探す。
// 注意：n は少なくとも奇数であること。偶数の場合はうまく動かない。
function nextPrime(n) {
  if (n < 2) {
    return 2
  }
  if (n == 2) {
    return 3
  }
  do {
    n += 2
  } while (!isPrime(n))
  return n
}

// 三角数。
function triangleNumber(n) {
  return n * (n + 1) / 2
}

// 五角数。
function pentagonalNumber(n) {
  return n * (3 * n - 1) / 2
}

// 六角数
function hexagonalNumber(n) {
  return n * (2 * n - 1)
}

// 約数を見つける。
function findDivisor(n) {
  var divisor = []
  var tSqrt = Math.sqrt(n)
  for (var i = 2; i <= tSqrt; ++i) {
    if (n % i === 0) {
      divisor.push(i)
      var ni = n / i
      if (i !== (ni)) {
        divisor.push(ni)
      }
    }
  }
  return divisor
}

// nが自然数の2乗かどうかを判定。
function isPerfectSquare(n) {
  var sqrt = Math.sqrt(n)
  return Math.ceil(n) === Math.floor(n)
}

// 二項係数。
function binomialCoefficient(n, k) {
  var r = 1
  for (var i = 1; i <= k; ++i) {
    r *= n--
    r /= i
  }
  return r
}
var combination = binomialCoefficient

// 最大公約数。
function gcd(m, n) {
  while (n !== 0) {
    var temp = n
    n = m % n
    m = temp
  }
  return m
}

// 最小公倍数。
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b)
}

// 階乗。
function factorial(n) {
  var factor = 1
  for (var i = 2; i <= n; ++i) {
    factor *= i
  }
  return factor
}

// 辞書順の順列。
function lexicographicPermutation(digits, n) {
  if (n >= factorial(digits.length)) {
    return []
  }

  var permutation = []
  var d = digits.slice()
  for (var i = d.length - 1; i >= 0; --i) {
    var f = factorial(i)
    permutation.push(d.splice(Math.floor(n / f), 1)[0])
    n %= f
  }
  return permutation
}

// すべての組み合わせ。
function listCombination(array) {
  var list = []
  var length = factorial(array.length)
  for (var n = 0; n < length; ++n) {
    list.push(lexicographicPermutation(array, n))
  }
  return list
}

// [1, 2, 3, ... ]というフォーマットの配列を 123... に変換。
function format1D(array) {
  var sum = 0
  var last = array.length - 1
  for (var j = 0; j < array.length; ++j) {
    sum += array[last - j] * Math.pow(10, j)
  }
  return sum
}

// [[1, 2], [3, 4], [5, 6]] というフォーマットの配列を
// [12, 34, 56] に変換。
function format2D(array) {
  var formated = new Array(array.length)
  for (var i = 0; i < array.length; ++i) {
    var sum = 0
    var digits = array[i]
    var last = digits.length - 1
    for (var j = 0; j < digits.length; ++j) {
      sum += digits[last - j] * Math.pow(10, j)
    }
    formated[i] = sum
  }
  return formated
}

// 回文数判定。
function isPalindrome(n) {
  var reversed = 0
  var radix = 10
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

// 桁数。
function digits(n) {
  if (isNaN(n)) {
    return null
  }
  var d = 0
  while(n !== 0) {
    ++d
    n = Math.floor(n / 10)
  }
  return d
}
