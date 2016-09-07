// 一桁目は偶数を含めないので置換対象にならない。
// 最も大きい桁は 0 にできないので特殊な場合として扱う。

function toArray(n) {
  var array = []
  while (n > 0) {
    array.unshift(n % 10)
    n = Math.floor(n / 10)
  }
  return array
}

// 13 = 1101 (2進数) を入れると [true, true, false, true] が出てくる。
function makeFlag(number, length) {
  var flag = []
  while (number > 0) {
    var remainder = number % 2
    number = Math.floor(number / 2)
    flag.unshift((remainder === 1))
  }
  while (flag.length < length) {
    flag.unshift(false)
  }
  return flag
}

function checkFamily(number, flag) {
  var member = 0
  for (var n = flag[0] ? 1 : 0; n <= 9; ++n) {
    var num = number.slice()
    for (var i = 0; i < flag.length; ++i) {
      if (flag[i]) {
        num[i] = n
      }
    }
    if (isPrime(format1D(num))) {
      ++member
    }
  }
  return member
}

function hasMMemberFamily(n, m) {
  var number = toArray(n)
  var member = 0

  // ここから
  var nn = n
  var fixedLength = number.length - 1
  var maxI = Math.pow(2, fixedLength)
  for (var i = 1; i < maxI; ++i) {
    var flag = makeFlag(i, fixedLength)
    member = checkFamily(number, flag)
    if (member === m) {
      console.log(flag)
      return true
    }
  }

  return false
}

// for (var n = 2; n < 1000000; n = nextPrime(n)) {
//   if (hasMMemberFamily(n, 8)) {
//     console.log(n)
//     break
//   }
// }

// var number = toArray(120383)
// var flag = [true, false, true, false, true]//makeFlag(2, number.length - 1)
// console.log(number, flag, checkFamily(number, flag))

console.log(isPrime(121313)) // これ
console.log(isPrime(222323))
console.log(isPrime(323333))
console.log(isPrime(424343))
console.log(isPrime(525353))
console.log(isPrime(626363))
console.log(isPrime(727373))
console.log(isPrime(828383))
console.log(isPrime(929393))

// 正解に近いところまでは出ている。
// 最も大きい桁の例外処理にバグあり。
// マスク（プログラム中の flag ）を事前に用意しておいたほうが速い、らしい。
