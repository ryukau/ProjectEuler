// n-th power は最大で 21

find()
function find() {
  var sum = 0
  for (var n = 1; n < 10; ++n) {
    var num = BigNum.from(n)
    for (var p = 1; p < 22; ++p) {
      var pow = BigNum.pow(num, p)
      if (pow.length === p) {
        ++sum
      }
    }
  }
  console.log(sum)
}
