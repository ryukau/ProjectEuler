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

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var strings = listCombination(digits)
strings = strings.filter((element, index, array) => element[0] !== 0)
console.log("strings constructed.")

strings = format2D(strings)
console.log("strings formated.")
// console.log(strings)

var primes = [2, 3, 5, 7, 11, 13, 17]
function checkProperty(number) {
  var divisor = 1000000
  for (var i = 0; i < primes.length; ++i) {
    var n = Math.floor(number / divisor) % 1000
    if (n % primes[i] !== 0) {
      return false
    }
    divisor *= 0.1
  }
  return true
}
// console.log(checkProperty(1406357289))

var sum = 0
for (var i = 0; i < strings.length; ++i) {
  if (checkProperty(strings[i])) {
    sum += strings[i]
  }
}
console.log(sum)