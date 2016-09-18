// 16-digit string を求められているので 10 は必ず外側に含まれる。

function hasSameTotal(array) {
  var half = array.length / 2
  var sum = array[0] + array[half] + array[half + 1]
  for (var i = 1; i < half; ++i) {
    if (array[i] < array[0]) {
      return false
    }
    var index1 = half + i
    var index2 = half + (i + 1) % half
    var anotherSum = array[i] + array[index1] + array[index2]
    if (sum !== anotherSum) {
      return false
    }
  }
  return true
}

function searchRing(n) {
  var set = []
  for (var i = 1; i <= n * 2; ++i) {
    set.push(i)
  }
  console.log(set)

  var list = []
  var length = factorial(set.length)
  for (var n = 0; n < length; ++n) {
    var candidate = lexicographicPermutation(set, n)
    if (hasSameTotal(candidate)) {
      list.push(candidate.join(""))
    }
  }
  return list
}

function format(string) {
  string = string.replace(/10/, "a")
  console.log(string)
  var formatted = ""
  var half = string.length / 2
  for (var i = 0; i < half; ++i) {
    var index1 = half + i
    var index2 = half + (i + 1) % half
    formatted += string[i] + string[index1] + string[index2]
  }
  return formatted.replace(/a/g, "10")
}

// もっと効率よくなるものの、これでも動く。
// var list = searchRing(5)
// console.log(list)

// var maxValue = BigNum.from(0)
// for (var i = 0; i < list.length; ++i) {
//   var value = BigNum.from(list[i])
//   if (BigNum.lt(maxValue, value)) {
//     maxValue = value
//   }
// }
console.log(format("61098753142"))
