function reverse(str){
    return str.split('').reduce((curr, pre) => pre + curr)
}
console.log(reverse('hello world'));