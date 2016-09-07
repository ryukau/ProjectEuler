function factorial(n) {
  var factor = 1
  for (var i = 2; i <= n; ++i) {
    factor *= i
  }
  return factor
}

function makeDigits(n) {
  var digits = []
  for (var i = 0; i < n; ++i) {
    digits.push(i)
  }
  return digits
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

function toString(n) {
  var str = ""
  for (var i = 0; i < n.length; ++i) {
    str += n[i]
  }
  return str
}

var digits = makeDigits(10)
console.log("digits: " + digits)
console.log(toString(lexicographicPermutation(digits, 999999)))
