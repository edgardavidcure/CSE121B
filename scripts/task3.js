function add(number1, number2) {
    return number1 + number2
}

function addNumbers(addend1, addend2){
    const addend1Value = document.getElementById(addend1).value;
    const addend2Value = document.getElementById(addend2).value;
    const sum = add(addend1Value + addend2Value);
    return sum;
    
}