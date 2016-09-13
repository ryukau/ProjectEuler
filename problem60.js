// console.log(3 + 7 + 109 + 673)
// console.log(check(109, 673))

// var set = [3, 7, 109, 673]

// top:
// for (n = nextPrime(673); n < 100000000; n = nextPrime(n)) {
//   for (var i = 0; i < set.length; ++i) {
//     if (!check(n, set[i])) {
//       continue top
//     }
//   }
//   set.push(n)
//   break
// }

// var sum = 0
// for (var i = 0; i < set.length; ++i) {
//   sum += set[i]
// }
// console.log(sum, set) // sum = 4000 くらいの値が出たが正しくなかった。

function check(n, m) {
  var dn = digits(n)
  var dm = digits(m)
  var concat1 = n + m * Math.pow(10, dn)
  var concat2 = m + n * Math.pow(10, dm)
  return isPrime(concat1) && isPrime(concat2)
}

function check3(array, n) {
  for (var i = 0; i < array.length; ++i) {
    if (!check(array[i], n)) {
      return false
    }
  }
  return true
}

function check2(array) {
  var iLast = array.length - 1
  for (var i = 0; i < iLast; ++i) {
    for (var j = i + 1; j < array.length; ++j) {
      if (!check(array[i], array[j])) {
        return false
      }
    }
  }
  return true
}
// console.log(check(3, 7))
// console.log(check2([3, 7, 109, 673]))
// console.log(check2([7, 19, 97, 3727]))
// console.log(check2([11, 23, 743, 1871]))
// console.log(check2([19, 31, 181, 9679]))
// console.log(check2([23, 47, 1481, 4211]))
// console.log(check2([43, 97, 1381, 8521]))
// console.log(check2([89, 107, 1061, 4973]))
// console.log(check2([467, 587, 617, 6323]))
// console.log(check2([1283, 1619, 4127, 7949]))
// console.log(check2([3391, 3433, 3643, 6607]))
// console.log(check2([3547, 3643, 5449, 9817]))
// console.log(check2([5023, 5443, 6841, 7039]))
// console.log(check2([5197, 5701, 6733, 8389]))
// console.log(check2([6569, 6689, 6779, 8537]))

// array から k 取り出すときの組み合わせすべて。
function combination(array, k) {
  var indices = new Array(k)
  for (var i = 0; i < indices.length; ++i) {
    indices[i] = i
  }
  indices.push(array.length)

  var last = indices.length - 1
  var start = indices.length - 2
  var c = [array.slice(0, k)]
  var end = array.length - k
  while (indices[0] < end) {
    for (var i = start; i >= 0; --i) {
      var next = indices[i] + 1
      if (next < indices[i + 1]) {
        indices[i] = next
        for (var j = i + 1; j < last; ++j) {
          indices[j] = indices[j - 1] + 1
        }
        break
      }
    }

    var list = new Array(k)
    for (var i = 0; i < list.length; ++i) {
      list[i] = array[indices[i]]
    }
    c.push(list)
  }
  return c
}

function listCombinationIndices(n, k) {
  var indices = new Array(k)
  for (var i = 0; i < indices.length; ++i) {
    indices[i] = i
  }
  indices.push(n)

  var last = indices.length - 1
  var start = indices.length - 2
  var c = [indices.slice(0, last)]
  var end = n - k
  while (indices[0] < end) {
    for (var i = start; i >= 0; --i) {
      var next = indices[i] + 1
      if (next < indices[i + 1]) {
        indices[i] = next
        for (var j = i + 1; j < last; ++j) {
          indices[j] = indices[j - 1] + 1
        }
        break
      }
    }
    c.push(indices.slice(0, last))
  }
  return c
}

// listCombinationIndices の例。
// console.log(listCombinationIndices(5, 3))

// combination の例。
// var array = [2, 4, 6, 8, 10]
// console.log(combination(array, 2))

// findSets()
function findSets() {
  // debugger

  // 遅すぎる。findSets2 よりこっちのほうが速いかも。

  var primes = []
  for (var n = 3; n < 392581; n = nextPrime(n)) {
    primes.push(n)
  }
  console.log(primes)
  console.log("primes done")

  var candidates = []
  var count = 0
  while (primes.length > 0) {
    console.log(count, primes.length)
    ++count

    var set = [primes.shift()]
    for (var j = 0; j < primes.length; ++j) {
      var hasProperty = true
      for (var k = 0; k < set.length; ++k) {
        if (!check(primes[j], set[k])) {
          hasProperty = false
          break
        }
      }
      if (hasProperty) {
        set.push(primes.splice(j, 1)[0])
        --j
      }
    }
    candidates.push(set)
  }
  console.log(candidates)

  var candidates2 = []
  for (var i = 0; i < candidates.length; ++i) {
    if (candidates[i].length >= 5) {
      candidates2.push(candidates[i])
    }
  }
  console.log(candidates2, candidates2.length)

  // for (var i = 0; i < candidates2.length; ++i) {
  //   console.log(i)
  //   findNext(candidates2[i])
  // }
  console.log("complete")
}

function findNext(set) {
  top:
  for (n = nextPrime(set[set.length - 1]); n < 1000000; n = nextPrime(n)) {
    for (var i = 0; i < set.length; ++i) {
      if (!check(n, set[i])) {
        continue top
      }
    }
    set.push(n)
    if (set.length >= 5) {
      break
    }
  }

  if (set.length >= 5) {
    console.log(set)
  }
}

// 素数を数え上ながら、集合を作っていくようにすればもう少し早くなりそう。


// findSets2()
function findSets2() {
  var sets = []

  var count = 0

  // まだ遅い。sets の足きりが必要。
  // n < 100000 では見つからない。

  var ans = []

  top:
  for (var n = 3; n < 1000000; n = nextPrime(n)) {
    console.log(count, n, sets.length)
    ++count

    for (var i = 0; i < sets.length; ++i) {
      if (check3(sets[i], n)) {
        sets[i].push(n)

        if (sets[i].length >= 5) {
          console.log(sets[i])
          ans.push(sets[i])
          break top
        }

        continue top
      }
    }
    sets.push([n])
  }

  console.log(ans)
}



// [503, 563, 1601, 429161, 438569] // 870397
// [1493, 2339, 16451, 107339, 264959] // 392581
// [4133, 4409, 9371, 759953, 973187] // 1751053

// console.log(check2([503, 563, 1601, 429161, 438569]))



// 根本的に間違っている気がする。
// find()
function find() {
  var primes = []
  for (var n = 3; n < 30000; n = nextPrime(n)) {
    primes.push(n)
  }
  console.log(primes)
  console.log("primes done")

  var candidates = []
  var count = 0
  for (var i = 0; i < primes.length; ++i) {
    console.log(count, primes.length)
    ++count

    var set = [primes[i]]
    for (var j = i + 1; j < primes.length; ++j) {
      if (check3(set, primes[j])) {
        set.push(primes[j])
      }
    }
    candidates.push(set)
  }
  console.log(candidates)

  var candidates2 = []
  for (var i = 0; i < candidates.length; ++i) {
    if (candidates[i].length >= 5) {
      candidates2.push(candidates[i])
    }
  }
  console.log(candidates2, candidates2.length)
}

// console.log(check2([13, 5197, 5701, 6733, 8389]))

function sum(array) {
  var sum = 0
  for (var i = 0; i < array.length; ++i) {
    sum += array[i]
  }
  return sum
}

// 重複を見逃していた。
find2()
function find2() {
  var primes = []
  for (var n = 3; n < 30000; n = nextPrime(n)) {
    primes.push(n)
  }
  console.log(primes)
  console.log("primes done")

  var max = Number.MAX_VALUE
  var candidates = []
  for (var i = 0; i < 10; ++i) {
    console.log(i, 10)

    var set1 = [primes[i]]
    for (var j = i + 1; j < primes.length; ++j) {
      if (!check3(set1, primes[j])) continue
      var set2 = set1.slice()
      set2.push(primes[j])
      for (var k = j + 1; k < primes.length; ++k) {
        if (!check3(set2, primes[k])) continue
        var set3 = set2.slice()
        set3.push(primes[k])
        for (var l = k + 1; l < primes.length; ++l) {
          if (!check3(set3, primes[l])) continue
          var set4 = set3.slice()
          set4.push(primes[l])
          for (var m = l + 1; m < primes.length; ++m) {
            if (!check3(set4, primes[m])) continue
            var set5 = set4.slice()
            set5.push(primes[m])
            candidates.push(set5)
            console.log(set5, sum(set5))
          }
        }
      }
    }
  }
  console.log(candidates)
}