function toString(n) {
  var str = ""
  for (var i = 0; i < n.length; ++i) {
    str += n[i]
  }
  return str
}

function sqrtFraction(n) {
  var r = Math.sqrt(n)
  if (Number.isInteger(r)) {
    return [r]
  }

  // integer + numer / denom
  var fraction = []
  var numer = 1
  var integer = Math.floor(r)
  var remain = integer

  // とりあえず1000桁くらい出す。
  for (var i = 0; i < 1000; ++i) {
    fraction.push(integer)
    var denom = Math.abs((n - remain * remain) / numer)
    remain = Math.abs(remain)
    integer = -1
    while (remain > 0 || remain * remain < n) {
      ++integer
      remain -= denom
    }
    remain += denom
    numer = denom
  }
  return fraction
}

// 繰り返しを検出。nArray[0] が繰り返しの先頭でなければうまく動かない。
function findReccursion(nArray) {
  if (nArray.length <= 0) {
    return []
  }

  var recursion = [nArray[0]]
  var length = nArray.length / 2
  for (var i = 1; i < length; ++i) {
    var isRecursion = true
    for (var j = i; j < length; j += recursion.length) {
      var next = j + recursion.length
      if (!isSame(recursion, nArray.slice(j, next))) {
        isRecursion = false
        break
      }
    }
    if (isRecursion) {
      return recursion
    }
    recursion.push(nArray[i])
  }
  return []
}

function isSame(array1, array2) {
  var A = array1.length === array2.length
  var B = array1.every((element, index) => element === array2[index])
  return A && B
}

var seq = []
for (var root = 0; root <= 10000; ++root) {
  seq.push(sqrtFraction(root))
}
console.log(seq)

var rec = []
for (var i = 0; i < seq.length; ++i) {
  rec.push(findReccursion(seq[i].slice(1)))
}
console.log(rec)

var sum = 0
for (var i = 0; i < rec.length; ++i) {
  if (rec[i].length % 2 === 1) {
    ++sum
  }
}
console.log(sum)