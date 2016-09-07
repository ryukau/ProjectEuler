const MAX = 1000000

function collatzSequence(n) {
  if (n < 1 || !Number.isInteger(n)) {
    return []
  }
  var sequence = [n]
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2
    }
    else {
      n = 3 * n + 1
    }
    sequence.push(n)
  }
  return sequence
}

// var longest = 1
// var longestLength = 1
// for (var i = 1; i < MAX; ++i) {
//   var sequence = collatzSequence(i)
//   if (sequence.length > longestLength) {
//     longestLength = sequence.length
//     longest = i
//   }
// }
// console.log(longest)
console.log(collatzSequence(837799))