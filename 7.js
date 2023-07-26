function romanToInt(roman) {
    const romanNumber = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100, 'D': 500,'M': 1000,};
  
    let total = 0;
    let prev = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentChar = roman.charAt(i);
      const current = romanNumber[currentChar];
  
      if (current < prev) {
        total -= current;
      } else {
        total += current;
      }
  
      prev = current;
    }
  
    return total;
  }
  
  console.log(romanToInt("IX")); 
  console.log(romanToInt("XXI")); 
  