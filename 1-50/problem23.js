// n の約数の総和。約数は1を含む。
function sumDivisor(n) {
  var divisor = findDivisor(n)
  var sum = 0
  for (var i = 0; i < divisor.length; ++i) {
    sum += divisor[i]
  }
  return sum + 1
}

function isPerfectNumber(n) {
  if (sumDivisor(n) === n) {
    return true
  }
  return false
}

function isDeficientNumber(n) {
  if (sumDivisor(n) < n) {
    return true
  }
  return false
}

function isAbundantNumber(n) {
  if (sumDivisor(n) > n) {
    return true
  }
  return false
}

const UPPER_LIMIT = 20161//28123
var an = []
for (var n = 1; n <= UPPER_LIMIT; ++n) {
  if (isAbundantNumber(n)) {
    an.push(n)
  }
}

var isanan = new Array(UPPER_LIMIT + 1).fill(false)
for (var i = 0; i < an.length; ++i) {
  for (var j = i; j < an.length; ++j) {
    var anan = an[i] + an[j]
    if (anan > UPPER_LIMIT) {
      break
    }
    isanan[anan] = true
  }
}

var sum = 0
for (var n = 1; n <= UPPER_LIMIT; ++n) {
  if (!isanan[n]) {
    sum += n
  }
}
console.log(an, isanan, sum)
