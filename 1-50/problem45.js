const limit = 10000000000

var tri = []
var n = 0
for (var i = 1; n < limit; ++i) {
  n = triangleNumber(i)
  tri.push(n)
}

var penta = []
var n = 0
for (var i = 1; n < limit; ++i) {
  n = pentagonalNumber(i)
  penta.push(n)
}

var hexa = []
var n = 0
for (var i = 1; n < limit; ++i) {
  n = hexagonalNumber(i)
  hexa.push(n)
}

console.log(tri, penta, hexa)

for (var i = 0; i < tri.length; ++i) {
  if (penta.indexOf(tri[i]) >= 0 && hexa.indexOf(tri[i]) >= 0) {
    console.log(tri[i])
  }
}