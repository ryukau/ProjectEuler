// problem 32 から関数もってくる。
function factorial(n) {
  var factor = 1
  for (var i = 2; i <= n; ++i) {
    factor *= i
  }
  return factor
}

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

function listCombination(array) {
  var list = []
  var length = factorial(array.length)
  for (var n = 0; n < length; ++n) {
    list.push(lexicographicPermutation(array, n))
  }
  return list
}

function format1D(array) {
  var sum = 0
  var last = array.length - 1
  for (var j = 0; j < array.length; ++j) {
    sum += array[last - j] * Math.pow(10, j)
  }
  return sum
}

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

var largest = 0
for (var digit = 3; digit < 10; ++digit) {
  var digits = []
  for (var i = 1; i <= digit; ++i) {
    digits.push(i)
  }
  var seq = format2D(listCombination(digits))
  for (var i = 0; i < seq.length; ++i) {
    var n = seq[i]
    if (isPrime(n) && n > largest) {
      largest = n
    }
  }
}

console.log(largest)