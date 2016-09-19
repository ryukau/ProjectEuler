// HCF は GCD と同義。

const LIMIT = 3 / 7 // 0.42857142857142855

function find(d) {
  var start = Math.ceil(d * LIMIT) // ほぼ正解。Math.floor((d * 3 - 1) / 7)
  for (var n = start; n > 0; --n) {
    if (gcd(n, d) === 1) {
      var fraction = n / d
      if (fraction < LIMIT) {
        return [fraction, n]
      }
    }
  }
  return null
}

var maxValue = 0
var numer = 0
var index = 0
for (var d = 2; d <= 1000000; ++d) { // 降順にして差分を記録することでもっと早くなる。
  var nearest = find(d)
  if (nearest !== null && nearest[0] > maxValue) {
    maxValue = nearest[0]
    numer = nearest[1]
    index = d
    // console.log(d, nearest[1], maxValue)
  }
}
console.log(index, numer, maxValue, LIMIT)
