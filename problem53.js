
console.log(combination(100, 100))

var sum = 0
for (var n = 1; n <= 100; ++n) {
  for (var r = 1; r <= n; ++r) {
    if (combination(n, r) > 1000000) {
      ++sum
    }
  }
}
console.log(sum)