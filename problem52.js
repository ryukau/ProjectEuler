
function toArray(n) {
  var array = []
  while (n > 0) {
    array.unshift(n % 10)
    n = Math.floor(n / 10)
  }
  return array
}

function containSameDigits(a, b) {
  if (a.length !== b.length) {
    return false
  }
  for (var i = 0; i < a.length; ++i) {
    if (b.indexOf(a[i]) < 0) {
      return false
    }
  }
  return true
}

function hasPermutedMultiples(number, maxMultiple) {
  var n = toArray(number)
  for (var mul = 2; mul <= maxMultiple; ++mul) {
    if (!containSameDigits(n, toArray(number * mul))) {
      return false
    }
  }
  return true
}

function numDigits(x) {
  return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1
}

for (var n = 1; n < 1000000; ++n) {
  // 桁が大きくなって来たらこの処理で速くなるはず。
  // if (numDigits(n) !== numDigits(n * 6)) {
  //   n = Math.pow(10, 1 + Math.floor(Math.log10(n)))
  // }

  if (hasPermutedMultiples(n, 6)) {
    console.log(n)
    break
  }
}

// console.log(Math.pow(10, 1 + Math.floor(Math.log10(20))))
