function check(numerator, denominator) {
  var nd = numerator / denominator
  if (nd >= 1) {
    return false
  }
  var a = numerator % 10
  var b = Math.floor(denominator / 10)
  var c = denominator % 10
  var d = Math.floor(numerator / 10)
  if ((a === b && nd === d / c) || (c === d && nd === a / b)) {
    return true
  }
  return false
}

function find() {
  var list = []
  for (var n = 10; n < 100; ++n) {
    if (n % 10 === 0) {
      ++n
    }
    list.push(n)
  }

  var answer = []
  for (var i = 0; i < list.length; ++i) {
    var numerator = list[i]
    for (var j = 0; j < list.length; ++j) {
      var denominator = list[j]
      if (i !== j && check(numerator, denominator)) {
        answer.push([numerator, denominator])
      }
    }
  }
  console.log(answer)
}

find()

// console.log(check(49, 98))