function toArray(n) {
  var array = []
  while (n > 0) {
    array.unshift(n % 10)
    n = Math.floor(n / 10)
  }
  return array
}

function isPermutation(n1, n2) {
  var n1array = toArray(n1)
  var n2array = toArray(n2)
  for (var i = 0; i < n1array.length; ++i) {
    var index = n2array.indexOf(n1array[i])
    if (index < 0) {
      return false
    }
    n2array.splice(index, 1)
  }
  return true
}

for (var n = 1001; n <= 9999; n = nextPrime(n)) {
  for (var i = 1000; i < 4500; ++i) {
    var n2 = n + i
    if (!isPrime(n2)) {
      continue
    }

    var n3 = n2 + i
    if (!isPrime(n3)) {
      continue
    }

    if (isPermutation(n, n2) && isPermutation(n, n3)) {
      console.log(n, n2, n3)
    }
  }
}


// console.log(isPrime(2597), isPrime(5927), isPrime(9257))
// console.log(2597 - 5927, 5927 - 9257)