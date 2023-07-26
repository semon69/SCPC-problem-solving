function find2ndSmallest(arr) {
    if (arr.length < 2) {
        return undefined;
    }
    arr.sort((a,b)=> a-b)
    return arr[1]
}

console.log(find2ndSmallest([4, 8, 1, 5, 9]));