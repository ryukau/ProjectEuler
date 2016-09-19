function enumerateReducedProperFractions(n) {
  var sum = 0;
  for (var i = 2; i <= n; ++i) {
    sum += totient(i)
  }
  return sum
}
var enumRPF = enumerateReducedProperFractions

console.log(enumRPF(1000000))