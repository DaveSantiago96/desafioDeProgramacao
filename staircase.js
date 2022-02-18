function staircase(n) {
  let filledArray = new Array(6).fill(' ')
  while (filledArray.indexOf(' ') !== -1) {
    filledArray.shift()
    filledArray.push('*')
    console.log(filledArray.join(''))
    n--
  }
}

return staircase()
