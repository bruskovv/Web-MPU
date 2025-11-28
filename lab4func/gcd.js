function gcd(a, b) {
    
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(48, 18));  
console.log(gcd(12, 8));   
console.log(gcd(7, 5));    
console.log(gcd(0, 10));   
