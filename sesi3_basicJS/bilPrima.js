function isPrime (num) {
  let x= 0;
  for(let i = 2; i<= Math.floor(num/2); i++) {
    x++
    if (num%i === 0) {
      return false
    } 
  }
  return true
}

console.log(isPrime(6));