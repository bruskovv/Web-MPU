function pluralizeRecords(n) {
  let word;
  
  if (n % 10 === 1 && n % 100 !== 11) {
    word = "запись";      // 1 запись, 21 запись
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    word = "записи";     // 2 записи, 4 записи, 22 записи
  } else {
    word = "записей";    // 0 записей, 5 записей, 11 записей
  }
  
  return `В результате выполнения запроса было найдено ${n} ${word}`;
}

console.log(pluralizeRecords(1));   // 1 запись
console.log(pluralizeRecords(2));   // 2 записи
console.log(pluralizeRecords(5));   // 5 записей
console.log(pluralizeRecords(11));  // 11 записей
console.log(pluralizeRecords(21));  // 21 запись
console.log(pluralizeRecords(0));   // 0 записей
