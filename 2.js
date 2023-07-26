function sumFunction(array){
    let sum = 0;
    for(let i = 0; i< array.length; i++){
        if(array[i] > 0){
            sum += array[i]
        }
    }
    return sum
}
console.log(sumFunction([1, -2, 3, 4, -4, -2]));