// HCF は GCD と同義。

const UPPER_LIMIT = 1 / 2
const LOWER_LIMIT = 1 / 3

function count(d) {
  // d = 2 のとき、うまく動かない。
  var lower = Math.floor(d * LOWER_LIMIT) + 1
  var upper = Math.floor(d * UPPER_LIMIT)

  var sum = 0
  for (var n = lower; n <= upper; ++n) {
    if (gcd(n, d) === 1) {
      ++sum
    }
  }
  console.log(d, lower, upper, sum)
  return sum
}

var sum = 0
for (var d = 3; d <= 8; ++d) {
  sum += count(d)
}
console.log(sum)
