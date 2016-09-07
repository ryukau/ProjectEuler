
function factorial(n) {
  var factor = 1
  for (var i = 2; i <= n; ++i) {
    factor *= i
  }
  return factor
}

// 9! = 362880
// 9! * 7 = 2540160
var list = []
var answer = 0
for (var number = 3; number < 3000000; ++number) {
  var n = number
  var sum = 0
  while (n > 0) {
    sum += factorial(n % 10)
    n = Math.floor(n / 10)
  }
  if (sum === number) {
    answer += number
    list.push(number)
  }
}

console.log(answer, list)
