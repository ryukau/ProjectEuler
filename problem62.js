var cubes = []
for (var n = 1000; n <= 10000; ++n) {
  cubes.push(n * n * n)
}
console.log(cubes)

var digi = new Array(20)
for (var i = 0; i < digi.length; ++i) {
  digi[i] = []
}
for (var i = 0; i < cubes.length; ++i) {
  var d = digits(cubes[i])
  if (d < digi.length) {
    digi[d].push(cubes[i])
  }
}
console.log(digi)

// console.log(makePermutationList(112344556688))
// var a = makePermutationList(123654)
// var b = makePermutationList(564132)
// var c = makePermutationList(9564132)
// console.log(isPermutedOf(a, b))

var set = []
for (var i = 0; i < digi.length; ++i) {
  var result = find(digi[i])
  if (result !== null) {
    set.push(result)
  }
}
console.log(set)


function find(numbers) {
  var set = []
  for (var i = 0; i < numbers.length; ++i) {
    var candidate = [numbers[i]]
    var nList = makePermutationList(numbers[i])
    for (var j = i + 1; j < numbers.length; ++j) {
      var mList = makePermutationList(numbers[j])
      if (isPermutedOf(nList, mList)) {
        candidate.push(numbers[j])
      }
    }
    if (candidate.length >= 5) {
      set.push(candidate)
    }
  }
  return set
}

function makePermutationList(n) {
  var list = new Array(10).fill(0)
  while (n !== 0) {
    var remainder = n % 10
    ++list[remainder]
    n = Math.floor(n / 10)
  }
  return list
}

function isPermutedOf(nList, mList) {
  for (var i = 0; i < nList.length; ++i) {
    if (nList[i] !== mList[i]) {
      return false
    }
  }
  return true
}