class BigNum {
  // 今のところ自然数だけ。
  static from(number) {
    var radix = 10
    var type = typeof number
    var big = []
    if (type === "number") {
      number = Math.floor(number)
      while (number !== 0) {
        big.push(number % radix)
        number = Math.floor(number / radix)
      }
    }
    if (type === "string") {
      big = number.split("").map(Number).reverse()
    }
    return big
  }

  static add(a, b) {
    var radix = 10
    var radix1 = radix - 1

    var c, minLength
    if (a.length > b.length) {
      c = a.slice()
      minLength = b.length
    }
    else {
      c = b.slice()
      minLength = a.length
    }

    var x, carry = 0
    for (var i = 0; i < minLength; ++i) {
      x = a[i] + b[i] + carry
      c[i] = x % radix
      carry = Math.floor(x / radix)
    }

    if (carry !== 0) {
      for (var i = minLength; i < c.length; ++i) {
        if (c[i] < radix1) {
          c[i] += carry
          carry = 0
          break
        }
        c[i] = 0
      }

      if (carry !== 0) {
        c.push(carry)
      }
    }

    return c
  }

  // https://en.wikipedia.org/wiki/Karatsuba_algorithm
  // static mulKaratsuba(a, b) {
  //   if (a.length === 1 || b.length === 1) {
  //     return this.mulNaive(a, b)
  //   }
  //   var m = Math.max(a.length, b.length)
  //   var m2 = m / 2
  //   var low1 = a.slice(0, m2)
  //   var high1 = a.slice(m2)
  //   var low2 = b.slice(0, m2)
  //   var high2 = b.slice(m2)
  //   var z0 = mulKaratsuba(low1, low2)
  //   var z1 = mulKaratsuba((low1 + high1), (low2 + high2))
  //   var z2 = mulKaratsuba(high1, high2)
  //   // ここからまだ
  //   var A = (z2 * 10 ^ (2 * m2))
  //   var B = ((z1 - z2 - z0) * 10 ^ (m2))
  //   return A + B + z0
  // }

  static mul(a, b) {
    var radix = 10
    var c = new Array(Math.max(a.length + b.length)).fill(0)
    for (var i = 0; i < a.length; ++i) {
      for (var j = 0; j < b.length; ++j) {
        var ij = i + j
        var x = a[i] * b[j] + c[ij]
        c[ij] = x % radix
        c[ij + 1] += Math.floor(x / radix)
      }
    }
    if (c[c.length - 1] === 0) {
      c.pop()
    }
    return c
  }

  // b は自然数のみ。
  static pow(a, b) {
    var power = a
    for (var n = 2; n <= b; ++n) {
      power = this.mul(power, a)
    }
    return power
  }

  // Less Than (a < b)
  static lt(a, b) {
    if (a.length < b.length) {
      return true
    }
    if (a.length > b.length) {
      return false
    }

    for (var i = a.length - 1; i > 0; --i) {
      if (a[i] !== b[i]) break
    }
    if (a[i] < b[i]) {
      return true
    }
    return false
  }

  // Greater Than (a > b)
  static gt(a, b) {
    if (a.length > b.length) {
      return true
    }
    if (a.length < b.length) {
      return false
    }

    for (var i = a.length - 1; i > 0; --i) {
      if (a[i] !== b[i]) break
    }
    if (a[i] > b[i]) {
      return true
    }
    return false
  }

  // Equal (a == b)
  static eq(a, b) {
    if (a.length - b.length !== 0) {
      return false
    }

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        return false
      }
    }
    return true
  }

  static toString(n) {
    var str = ""
    for (var i = n.length - 1; i >= 0; --i) {
      str += n[i]
    }
    return str
  }

  static isPalindrome(n) {
    var half = Math.floor(n.length / 2)
    var right = n.length - 1
    for (var left = 0; left < half; ++left) {
      if (n[left] !== n[right]) {
        return false
      }
      --right
    }
    return true
  }

  static sumDigits(n) {
    var sum = 0
    for (var i = 0; i < n.length; ++i) {
      sum += n[i]
    }
    return sum
  }
}
