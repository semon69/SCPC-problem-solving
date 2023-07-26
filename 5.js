function calculator(x, y, operator){
    if(operator == '+'){
        return x + y
    }
    else if(operator == '-'){
        return x - y
    }
    else if(operator == '*'){
        return x * y
    }
    else if(operator == '/'){
        return x / y
    }
}
console.log(calculator(6, 0, '/'));