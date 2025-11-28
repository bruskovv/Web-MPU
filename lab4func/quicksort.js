function getSortedArray(array, key) {
  if (array.length <= 1) return array;
  
  let sorted = [...array];
  quickSort(sorted, 0, sorted.length - 1, key);
  return sorted;
}

function quickSort(arr, low, high, key) {
  if (low < high) {
    let pi = partition(arr, low, high, key);
    quickSort(arr, low, pi - 1, key);
    quickSort(arr, pi + 1, high, key);
  }
}

function partition(arr, low, high, key) {
  let pivot = arr[high][key];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (compare(arr[j][key], pivot) <= 0) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function compare(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  let strA = String(a), strB = String(b);
  let minLen = Math.min(strA.length, strB.length);
  
  for (let i = 0; i < minLen; i++) {
    let codeA = strA.charCodeAt(i);
    let codeB = strB.charCodeAt(i);
    if (codeA !== codeB) return codeA - codeB;
  }
  return strA.length - strB.length;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let users = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 }
];

console.log(getSortedArray(users, 'age'));
console.log(getSortedArray(users, 'name'));
