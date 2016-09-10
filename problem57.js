// sqrt(2) の 連分数について。
// n 反復目の
// 分子 = (n - 1 反復目の分母) + (n 反復目の分母)
// 分母 = (n - 1 反復目の分子) + (n - 1 反復目の分母)

var numer = BigNum.from(1)
var denom = BigNum.from(1)
var sum = 0
for (var i = 0; i < 1000; ++i) {
  var temp = denom.slice()
  denom = BigNum.add(denom, numer)
  numer = BigNum.add(temp, denom)
  if (numer.length > denom.length) {
    ++sum
  }
  // console.log(BigNum.toString(numer), BigNum.toString(denom))
}
console.log(sum, BigNum.toString(numer), BigNum.toString(denom))
// console.log(digits(12456483))
