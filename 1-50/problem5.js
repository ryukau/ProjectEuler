function gcd(m, n) {
  while (n !== 0) {
    var temp = n
    n = m % n
    m = temp
  }
  return m
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b)
}

var answer = 1
for (var n = 2; n <= 20; ++n) {
  answer = lcm(answer, n)
}
console.log(answer)