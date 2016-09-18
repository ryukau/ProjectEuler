// sqrt(2) のテストケース。これはうまくいった。
// var sequence = [1]
// for (var i = 2; i <= 10; ++i) {
//   sequence.push(2)
// }
// console.log(sequence)

// e の 連分数。
var sequence = [2]
for (var i = 2; i <= 100; ++i) {
  if (i % 3 === 0) {
    var k = i / 3
    sequence.push(2 * k)
  }
  else {
    sequence.push(1)
  }
}
console.log(sequence)

var e = frac(0)
console.log(e)

console.log(BigNum.sumDigits(e[0]), BigNum.sumDigits(e[1]))

// 返り値は [numerator, denominator]
function frac(depth) {
  var tail = sequence.length - 1
  if (depth >= tail) {
    return [BigNum.from(1), BigNum.from(sequence[tail])]
  }

  var fraction = frac(depth + 1)
  var integer = BigNum.from(sequence[depth])
  var id = BigNum.mul(integer, fraction[1]) // integer * denominator
  var numer = BigNum.add(id, fraction[0])
  return [fraction[1], numer]
}

// 239 272