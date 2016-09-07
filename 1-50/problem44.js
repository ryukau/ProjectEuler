function pentagonalNumber(n) {
  return n * (3 * n - 1) / 2
}

var list = []
var n = 0
for (var i = 1; n < 10000000; ++i) {
  n = pentagonalNumber(i)
  list.push(n)
}
console.log(list)

var diff = 10000000
for (var i = 0; i < list.length; ++i) {
  for (var j = i + 1; j < list.length; ++j) {
    var add = list[j] + list[i]
    var sub = list[j] - list[i]
    if (list.indexOf(add) >= 0 && list.indexOf(sub) >= 0 && diff > sub) {
      diff = sub
    }
  }
}
console.log(diff)