function fibb(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  
  for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  
  return b;
}

console.log(fibb(0));  
console.log(fibb(1));   
console.log(fibb(2));   
console.log(fibb(5));   
console.log(fibb(10));  
