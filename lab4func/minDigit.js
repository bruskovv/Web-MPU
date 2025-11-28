function minDigit(x) {
  if (x===0) return 0;
  let min = 9;  
  
  while (x > 0) {
    let digit = x % 10;  
    if (digit < min) {
      min = digit;
    }
    x = Math.floor(x / 10); 
  }
  
  return min;
}

console.log(minDigit(327));    
console.log(minDigit(58));     
console.log(minDigit(987));   
console.log(minDigit(0));     
