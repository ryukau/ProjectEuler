function binomialCoefficient(n, k) {
  var r = 1
  for (var i = 1; i <= k; ++i) {
    r *= n--
    r /= i
  }
  return r
}

// https://en.wikipedia.org/wiki/Lattice_path
// North-East lattice paths に該当。
console.log(binomialCoefficient(40, 20))
