function cesar(str, shift, action) {
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const A = alphabet.length; // 33
  
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let pos = alphabet.indexOf(char.toLowerCase());
    
    if (pos !== -1) {
      let shiftDir = (action === 'encode') ? shift : -shift;
      let newPos = (pos + shiftDir + A * 100) % A;
      let newChar = alphabet[newPos];
      
      result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
    } else {
      result += char;
    }
  }
  
  return result;
}

// Правильная расшифровка: сдвиг 8
// "эзтыхз фзъзъз" → shift=8, decode → "хакуна матата"
console.log(cesar("эзтыхз фзъзъз", 8, 'decode')); 
// Вывод: хакуна матата

// Проверка encode/decode
console.log(cesar("хакуна матата", 8, 'encode')); 
// эзтыхз фзъзъз
