var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 2^n

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

// 簡単なテスト。
// var test = [1, 2, 3]
// var list = listCombination(test)
// console.log(list)
// console.log(format(list))

// すべての組み合わせの数は2^array.lengthある。
// 0 <= index && index < Math.pow(2, digits.length)
function getSequence(digits, index) {
  var sequence = []
  for (var i = 0; i < digits.length; ++i) {
    if (index % 2 === 1) {
      sequence.push(digits[i])
    }
    index = Math.floor(index / 2)
    if (index === 0) {
      break
    }
  }
  return sequence
}

function getAllSequences(array) {
  var sequences = []
  var max = Math.pow(2, array.length)
  for (var n = 1; n < max; ++n) {
    var seq = getSequence(array, n)
    var list = listCombination(seq)
    sequences = sequences.concat(list)
  }
  return sequences
}

function subtractArray(a, b) {
  return a.filter((element, index, array) => b.indexOf(element) < 0)
}

// ややこしかったのでまとめ。
// 色々試した結果、以下の手順でうまくいった。
// 1. digits から生成できるすべての順列を取得。
// 2. 1.で得られた順列を切ってテスト。
// 3. テストに通った値をまとめて返す。
function searchPandigitalProducts() {
  var permutation = listCombination(digits)
  var iMax = digits.length - 1
  var jMax = digits.length
  var products = []
  for (var index = 0; index < permutation.length; ++index) {
    var p = permutation[index]
    for (var i = 1; i < iMax; ++i) {
      for (var j = i + 1; j < jMax; ++j) {
        var mulc = format1D(p.slice(0, i)) // multiplicand
        var mult = format1D(p.slice(i, j)) // multiple
        var prod = format1D(p.slice(j, p.length)) // product
        if (mulc * mult === prod) {
          products.push(prod)
        }
      }
    }
  }
  return products
}

// var p = searchPandigitalProducts()
var p = [4396, 4396, 5346, 5346, 5346, 5346, 5796, 5796, 5796, 5796, 6952, 6952, 7254, 7254, 7632, 7632, 7852, 7852]
var f = new Set(p)
var sum = 0
for (var item of f) {
  sum += item
}

console.log(sum)
