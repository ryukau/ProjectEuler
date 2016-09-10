// console.log(3 + 7 + 109 + 673)
// console.log(check(109, 673))

// var set = [3, 7, 109, 673]

// top:
// for (n = nextPrime(673); n < 1000000; n = nextPrime(n)) {
//   var found = false
//   for (var i = 0; i < set.length; ++i) {
//     if (!check(n, set[i])) {
//       continue top
//     }
//   }
//   set.push(n)
//   break
// }

// var sum = 0
// for (var i = 0; i < set.length; ++i) {
//   sum += set[i]
// }
// console.log(sum, set) // sum = 4000 くらいの値が出たが正しくなかった。

function check(n, m) {
  var dn = digits(n)
  var dm = digits(m)
  var concat1 = n + m * Math.pow(10, dn)
  var concat2 = m + n * Math.pow(10, dm)
  return isPrime(concat2) && isPrime(concat2)
}

// array から k 取り出すときの組み合わせすべて。
function combination(array, k) {
  var c = []
  var length = binomialCoefficient(array.length, k)
  for (var n = 0; n < length; ++n) {
    var list = []

    // 未完成。

    c.push(list)
  }
  return c
}

var primes = []
for (n = 2; n < 4100; n = nextPrime(n)) {
  primes.push(n)
}

console.log(primes)
console.log(binomialCoefficient(1000, 5))