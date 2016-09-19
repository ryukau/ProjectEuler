function sumFactorial(n) {
  var num = BigNum.from(n)
  var sum = 0
  for (var i = 0; i < num.length; ++i) {
    sum += factorial(num[i])
  }
  return sum
}

function findLoop(n) {
  var sequence = [n]
  var candidate = sumFactorial(n)
  while (sequence.indexOf(candidate) < 0) {
    sequence.push(candidate)
    candidate = sumFactorial(candidate)
  }
  return sequence
}

var sum = 0
for (var n = 0; n < 1000000; ++n) {
  var seq = findLoop(n)
  if (seq.length === 60) {
    ++sum
  }
}
console.log(sum)