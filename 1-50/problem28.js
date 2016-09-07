var diagonal = 1
var sum = 1
for (var spiral = 3; spiral <= 1001; spiral += 2) {
  var s1 = spiral - 1
  for (var i = 0; i < 4; ++i) {
    diagonal += s1
    sum += diagonal
  }
}
console.log(sum)