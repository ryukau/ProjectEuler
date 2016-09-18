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

// x^2 - D * y^2 = 1
// [x, y] = [denom, numer]
function solve(array) {
  var last = array.length - 1
  var numer = BigNum.from(1)
  var denom = BigNum.from(array[last])
  for (var i = last - 1; i >= 0; --i) {
    var digit = BigNum.from(array[i])
    var temp = BigNum.add(numer, BigNum.mul(denom, digit))
    numer = denom
    denom = temp
  }
  return [denom, numer]
}

// var A = sqrtFraction(13)
// var B = findReccursion(A.slice(1))
// if (B.length % 2 === 1) {
//   B = B.concat(B)
// }
// B.pop()
// B.unshift(A[0])
// var C = solve(B)
// console.log(A, B)
// console.log(BigNum.toString(C[0]), BigNum.toString(C[1]))


var seq = []
// D ≤ 1000
for (var root = 0; root <= 1000; ++root) {
  seq.push(sqrtFraction(root))
}
console.log(seq)

var rec = []
for (var i = 0; i < seq.length; ++i) {
  rec.push(findReccursion(seq[i].slice(1)))
}
console.log(rec)

var answer = []
for (var i = 0; i < rec.length; ++i) {
  if (rec[i].length <= 0) {
    answer.push([BigNum.from(1), BigNum.from(0)])
    continue
  }
  if (rec[i].length % 2 === 1) {
    rec[i] = rec[i].concat(rec[i])
  }
  rec[i].pop()
  rec[i].unshift(seq[i][0])
  answer.push(solve(rec[i]))
}
console.log(answer)

// n <= 64 以下でおかしいのは 13, 29, 41, 53, 58, 61.
// for (var i = 0; i < answer.length; ++i) {
//   console.log(
//     i,
//     BigNum.toString(answer[i][0]),
//     BigNum.toString(answer[i][1])
//   )
// }


var maxIndex = -1
var maxValue = BigNum.from(0)
for (var i = 0; i < answer.length; ++i) {
  if (BigNum.lt(maxValue, answer[i][0])) {
    maxValue = answer[i][0]
    maxIndex = i
    console.log(maxIndex, BigNum.toString(maxValue))
  }
}