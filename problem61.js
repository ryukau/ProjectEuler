var numbers = []
for (var p = 3; p <= 8; ++p) {
  var n = 1
  var m = 1
  var list = []
  while (n < 10000) {
    var lower2 = n % 100
    if (n >= 1000 && lower2 >= 10) {
      var upper2 = Math.floor(n / 100)
      list.push([upper2, lower2])
    }
    ++m
    n = polygonalNumber(p, m)
  }
  console.log(p, n, m)
  numbers.push(list)
}
console.log(numbers)

var result = find(numbers)
console.log(result)
console.log(sum(result[0]))

function sum(result) {
  var sum = 0
  for (var i = 0; i < result.length; ++i) {
    sum += result[i][0] * 100 + result[i][1]
  }
  return sum
}

function find(numbers) {
  var set = []
  for (var i = 0; i < numbers.length; ++i) {
    for (var j = 0; j < numbers[i].length; ++j) {
      var newNumbers = []
      for (var k = 0; k < numbers.length; ++k) {
        if (k !== i) {
          newNumbers.push(numbers[k])
        }
      }

      var result = findRec(newNumbers, [numbers[i][j]])
      if (result !== null) {
        set.push(result)
      }
    }
  }
  return set
}

function findRec(numbers, candidates) {
  var tail = candidates[candidates.length - 1]
  if (numbers.length <= 0) {
    var head = candidates[0]
    if (tail[1] === head[0]) {
      return candidates
    }
    return null
  }

  for (var i = 0; i < numbers.length; ++i) {
    for (var j = 0; j < numbers[i].length; ++j) {
      if (tail[1] === numbers[i][j][0]) {
        var newNumbers = []
        for (var k = 0; k < numbers.length; ++k) {
          if (k !== i) {
            newNumbers.push(numbers[k])
          }
        }

        var newCandidates = candidates.slice()
        newCandidates.push(numbers[i][j])

        var result = findRec(newNumbers, newCandidates)
        if (result !== null) {
          return result
        }
      }
    }
  }
  return null
}
