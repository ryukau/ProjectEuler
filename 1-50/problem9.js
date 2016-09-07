// https://en.wikipedia.org/wiki/Formulas_for_generating_Pythagorean_triples


function isPerfectSquare(n) {
  var sqrt = Math.sqrt(n)
  return Math.ceil(n) === Math.floor(n)
}

function isInteger(n) {
  return Math.ceil(n) === Math.floor(n)
}

// Dickson's method
function findPythagoreanTriples(max) {
  var triples = []
  for (var r = 1; r < max; ++r) {
    var rSq = r * r
    var limit = rSq / 2
    for (var s2 = 2; s2 <= limit; s2 += 2) {
      var t = rSq / s2
      if (isInteger(t)) {
        var s = s2 / 2
        var x = r + s
        var y = r + t
        var z = r + s + t
        if (x + y + z === 1000) {
          console.log(x, y, z, x * y * z)
        }
        triples.push([x, y, z])
      }
    }
  }
}

findPythagoreanTriples(1000)