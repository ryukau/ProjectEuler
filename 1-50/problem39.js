// problem 9 と関連。


function findPythagoreanTriples(max) {
  var triples = []
  for (var r = 1; r <= max; ++r) {
    var rSq = r * r
    var limit = rSq / 2
    for (var s2 = 2; s2 <= limit; s2 += 2) {
      var t = rSq / s2
      if (Number.isInteger(t)) {
        var s = s2 / 2
        var x = r + s
        var y = r + t
        var z = r + s + t
        // if (x + y + z === 1000) {
        //   console.log(x, y, z, x * y * z)
        // }
        triples.push([x, y, z])
      }
    }
  }
  return (triples)
}


var triples = findPythagoreanTriples(1000)

// trim triples.

console.log(triples)

var sum = new Array(1001).fill(0)
for (var i = 0; i < triples.length; ++i) {
  var p = 0
  for (var j = 0; j < triples[i].length; ++j) {
    p += triples[i][j]
  }
  if (p <= 1000) {
    ++sum[p]
  }
}

var index = 0
var max = 0
for (var i = 0; i < sum.length; ++i) {
  if (sum[i] > max) {
    max = sum[i]
    index = i
  }
}

console.log(index, sum)