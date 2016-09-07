const value = 200
const coinTypes = [1, 2, 5, 10, 20, 50, 100, 200]

function coinSum(type, sum, way) {
  var way = 0
  var upperLimit = Math.floor((value - sum) / coinTypes[type])
  for (var n = 0; n <= upperLimit; ++n) {
    var total = sum + n * coinTypes[type]
    if (total === value) {
      ++way
    }
    else {
      way += coinSum(type - 1, total)
    }
  }
  return way
}

var way = coinSum(coinTypes.length - 1, 0)
console.log(way)
