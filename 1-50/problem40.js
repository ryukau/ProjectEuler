function toString(n) {
  var str = ""
  for (var i = 0; i < n.length; ++i) {
    str += n[i]
  }
  return str
}

function champernowneConstant(max) {
  var c = [0]
  for (var n = 1; n <= max; ++n) {
    var num = n
    var nArray = []
    while (num > 0) {
      nArray.unshift(num % 10)
      num = Math.floor(num / 10)
    }
    c = c.concat(nArray)
  }
  return c
}

// var constant = champernowneConstant(10000)
// console.log(constant, toString(constant))
// console.log(constant[1], constant[10], constant[100], constant[1000], constant[10000], constant[100000], constant[1000000])


function d10n(n) {
  debugger
  if (n < 2) {
    return 1
  }
  var A = Math.pow(10, n - 1)
  var B = A * 10 - 10
  for (var i = 2; i < n; ++i) {
    B -= 9 * i * Math.pow(10, i - 1)
  }
  var remainder = B % n
  return [Math.floor(A + B / n), remainder]
}

// console.log(d10n(7))
// console.log(d10n(0), d10n(1), d10n(2), d10n(3), d10n(4), d10n(5), d10n(6))
console.log(1 * 1 * 5 * 3 * 7 * 2 * 1)

// (d100)
// 10 + (100 - 10) / 2
// 55

// (d1000)
// 100 + (1000 - 180 - 10) / 3
// 100 + 810 / 3
// 100 + 270
// 370

// (d10000)
// 1000 + (10000 - 2700 - 180 - 10) / 4
// 1000 + (10000 - 2890) / 4
//        (10000 - 2890) / 4 = 1777 あまり 2
// 2777 あまり 2 なので 7

// 10000 + (100000 - 36000 - 2700 - 180 - 10)
