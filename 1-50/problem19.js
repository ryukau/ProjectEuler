var day = 365
var sunday = 0
for (year = 1901; year <= 2000; ++year) {
  for (month = 1; month <= 12; ++month) {
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      day += 30
    }
    else if (month === 2) {
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        day += 29
      }
      else {
        day += 28
      }
    }
    else {
      day += 31
    }

    sunday += (day % 7 === 6) ? 1 : 0
  }
}

console.log(sunday)
