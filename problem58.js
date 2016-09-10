var numPrime = 0
var diagonal = 1
for (var spiral = 3; spiral <= 100001; spiral += 2) {
  var s1 = spiral - 1
  for (var i = 0; i < 4; ++i) {
    diagonal += s1
    if (isPrime(diagonal)) {
      ++numPrime
    }
  }
  var denom = 4 * Math.floor(spiral / 2) + 1
  var ratio = numPrime / denom
  if (ratio < 0.1) {
    console.log(spiral)
    break
  }
}
console.log(numPrime, denom)