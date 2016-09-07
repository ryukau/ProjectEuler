function findLargest() {
  var limit = 1000000
  var largestSum = 0
  var largestTerms = 0
  var largestN = 0
  var sum = 0
  for (var n = 2; n < limit; n = nextPrime(n)) {
    sum = n
    var nn = n
    var terms = 1
    while (sum < limit) {
      nn = nextPrime(nn)
      sum += nn
      ++terms
    }
    sum -= nn
    --terms

    if (terms > largestTerms && isPrime(sum)) {
      largestTerms = terms
      largestSum = sum
      largestN = n
    }
  }
  console.log(largestSum + ": " + largestTerms + " terms start from " + largestN)
}
findLargest()