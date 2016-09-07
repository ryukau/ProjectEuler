

function numberToWord(n) {
  return null
}

function numberToWord1_19(n) {
  switch (n) {
    // case 0:
    //   return "Zero"
    case 1:
      return "One"
    case 2:
      return "Two"
    case 3:
      return "Three"
    case 4:
      return "Four"
    case 5:
      return "Five"
    case 6:
      return "Six"
    case 7:
      return "Seven"
    case 8:
      return "Eight"
    case 9:
      return "Nine"
    case 10:
      return "Ten"
    case 11:
      return "Eleven"
    case 12:
      return "Twelve"
    case 13:
      return "Thirteen"
    case 14:
      return "Fourteen"
    case 15:
      return "Fifteen"
    case 16:
      return "Sixteen"
    case 17:
      return "Seventeen"
    case 18:
      return "Eighteen"
    case 19:
      return "Nineteen"
  }
  return ""
}

function numberToWord1_99(n) {
  if (n < 20) {
    return numberToWord1_19(n)
  }

  var reminder = n % 10
  n -= reminder
  var str
  switch (n) {
    case 20:
      str = "Twenty"
      break
    case 30:
      str = "Thirty"
      break
    case 40:
      str = "Forty"
      break
    case 50:
      str = "Fifty"
      break
    case 60:
      str = "Sixty"
      break
    case 70:
      str = "Seventy"
      break
    case 80:
      str = "Eighty"
      break
    case 90:
      str = "Ninety"
      break
  }
  return str + numberToWord1_19(reminder)
}

function numberToWord100_1000(n) {
  if (n === 1000) {
    return "One" + "Thousand"
  }
  var reminder = n % 100
  var hundred = Math.floor(n / 100)
  var str = ""
  if (hundred > 0) {
    str += numberToWord1_19(hundred) + "Hundred"
    if (reminder === 0) {
      return str
    }
    str += "And"
  }
  return str + numberToWord1_99(reminder)
}

var sum = 0
for (var n = 1; n <= 1000; ++n) {
  var str = numberToWord100_1000(n)
  sum += str.length
  console.log(str)
}
console.log(sum)
