// largest
// 1 to 9 pandigital
// 9-digit number

function format1D(array) {
  var sum = 0
  var last = array.length - 1
  for (var j = 0; j < array.length; ++j) {
    sum += array[last - j] * Math.pow(10, j)
  }
  return sum
}

function pandigitalMultiples(n) {
  // debugger
  var number = []
  for (var i = 1; number.length < 9; ++i) {
    var ni = n * i
    var numberTemp = []
    while (ni > 0) {
      var remainder = ni % 10
      numberTemp.unshift(remainder)
      ni = Math.floor(ni / 10)
    }
    number = number.concat(numberTemp)
  }

  var set = new Set(number)
  if (number.length === 9 && set.size === 9 && !set.has(0)) {
    return number
  }
  return []
}

var list = []
for (var n = 1000; n < 10000; ++n) {
  var mul = pandigitalMultiples(n)
  if (mul.length !== 0) {
    list.push(format1D(mul))
    console.log(n)
  }
}
console.log(list.sort((a, b) => a - b))

// console.log(format1D(pandigitalMultiples(192)))
// console.log(format1D(pandigitalMultiples(1)))
// console.log(format1D(pandigitalMultiples(9)))
// console.log(format1D(pandigitalMultiples(16)))