function toString(n) {
  var str = ""
  for (var i = 0; i < n.length; ++i) {
    str += n[i]
  }
  return str
}

// numerator > 0, denominator > 0 が条件。
function fraction(numerator, denominator, digit) {
  var real = []
  var radix = 10
  while (digit > 0) {
    var quotient = numerator / denominator
    if (quotient === 0) {
      break
    }

    if (quotient < 1) {
      real.push(0)
      numerator *= radix
    }
    else {
      real.push(Math.floor(quotient))
      numerator = (numerator % denominator) * radix
    }
    --digit
  }
  return real
}

function findRecursion(n, denominator) {
  var denomLength = new String(denominator).length + 1
  if (n.length <= denomLength) {
    return []
  }
  var recursion = [n[denomLength]]
  var length = n.length / 2
  for (var i = denomLength + 1; i < length; ++i) {
    var isRecursion = true
    for (var j = i; j < length; j += recursion.length) {
      var next = j + recursion.length
      if (!isSame(recursion, n.slice(j, next))) {
        isRecursion = false
        break
      }
    }
    if (isRecursion) {
      return recursion
    }
    recursion.push(n[i])
  }
  return []
}

function isSame(array1, array2) {
  // console.log(array1, array2)
  return (array1.length === array2.length) && array1.every((element, index) => element === array2[index])
}

//
var max = 0
var maxLength = 0
for (var n = 1; n < 1000; ++n) {
  var frac = fraction(1, n, 10000)
  var rec = findRecursion(frac, n)
  // console.log(n, frac, rec, max, maxLength)
  if (rec.length > maxLength) {
    maxLength = rec.length
    max = n
  }
}
console.log(max)

var frac = fraction(1, max, 10000)
var rec = findRecursion(frac, max)
console.log(frac, rec)
