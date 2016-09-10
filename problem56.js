var max = 0
for (var a = 1; a < 100; ++a) {
  for (var b = 1; b < 100; ++b) {
    var A = BigNum.from(a)
    var power = BigNum.pow(A, b)
    var sum = BigNum.sumDigits(power)
    if (sum > max) {
      max = sum
    }
  }
}
console.log(max)