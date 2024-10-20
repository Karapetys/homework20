function nameHello(yourName) {
    return `Hello ${yourName}`
}

const result = nameHello("Artyom")
console.log(result);





const numbers = [1, 2, 3, 4, 5, 10, 15, 20, 21, 23, 26, 27, 29, 31 , 35]

function checkForNumberHigherThenTen(array) {

    for(let i=0; i < array.length; i++) {
        if(array[i] >10) {
            console.log(array[i])
        }
    }
}

checkForNumberHigherThenTen(numbers)


function calculator(num1, num2, operator) {
    if (operator === 'plus') {
        return num1 + num2;
    } else if (operator === 'minus') {
        return num1 - num2;
    } else if (operator === 'multiply') {
        return num1 * num2;
    } else if (operator === 'divide') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Error: Division by zero';
        }
    } else {
        return 'Error: Unknown operator';
    }
}

const result1 = calculator(2, 3, 'minus');
console.log(result1);

const result2 = calculator(2, 3, 'plus');
console.log(result2);

const result3 = calculator(2, 3, 'multiply');
console.log(result3);

const result4 = calculator(6, 3, 'divide');
console.log(result4);

const result5 = calculator(6, 0, 'divide');
console.log(result5);