function findMostFrequentElement(arr) {
    const numbers = {};
  
    arr.forEach((num) => {
      numbers[num] = (numbers[num] || 0) + 1;
    });
  
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (let key in numbers) {
      if (numbers[key] > maxFrequency) {
        mostFrequentElement = key;
        maxFrequency = numbers[key];
      }
    }
  
    return parseInt(mostFrequentElement); 
  }
  

  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(array);
  console.log(mostFrequent);
  