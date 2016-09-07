const power = 5
const max = Math.pow(9, power) * power
const radix = 10

var list = []
for (var number = 2; number < max; ++number) {
  var n = number
  var sum = 0
  while (n > 0) {
    var remainder = n % radix
    sum += Math.pow(remainder, power)
    n = Math.floor(n / radix)
  }
  if (sum === number) {
    list.push(number)
  }
}

var sum = 0
for (var i = 0; i < list.length; ++i) {
  sum += list[i]
}

console.log(list)
console.log(sum)
