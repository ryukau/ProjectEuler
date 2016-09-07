console.log(999 * 999) // 998001
var maxPalindromicNumber3x3 = 989989

searchParindromicNumber()

function searchParindromicNumber() {
  var max = 999
  var min = 100
  var maxnm = 0
  var maxn = 0
  var maxm = 0
  for (var n = max; n > min; --n) {
    for (var m = n; m > min; --m) {
      var nm = n * m
      if (isPalindrome(nm)) {
        if (nm > maxnm) {
          console.log(nm, maxnm)
          maxnm = nm
          maxn = n
          maxm = m
        }
        break
      }
    }
  }
  console.log(maxn, maxm, maxnm)
}

// 回文数判定。
function isPalindrome1(n) {
  var num = []
  var radix = 10
  while (n !== 0) {
    num.unshift(n % radix) // push でもいい。
    n = Math.floor(n / radix)
  }
  var length = Math.floor(num.length / 2)
  var last = num.length - 1
  for (var i = 0; i < length; ++i) {
    if (num[i] !== num[last - i]) {
      return false
    }
  }
  return true
}

// 多少早いはず。
function isPalindrome(n) {
  var reversed = 0
  var radix = 10
  var m = n
  while (n !== 0) {
    reversed = radix * reversed + n % radix
    n = Math.floor(n / radix)
  }
  if (reversed === m) {
    return true
  }
  return false
}