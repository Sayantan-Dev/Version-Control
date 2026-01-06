class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    modulo(a, b) {
        if (b === 0) {
            throw new Error("Modulo by zero is not allowed");
        }
        return a % b;
    }
}

// Example usage
const calc = new Calculator();

console.log("Addition: ", calc.add(10, 5));           // 15
console.log("Subtraction: ", calc.subtract(10, 5));   // 5
console.log("Multiplication: ", calc.multiply(10, 5)); // 50
console.log("Division: ", calc.divide(10, 5));        // 2
console.log("Modulo: ", calc.modulo(10, 3));          // 1
console.log("Power: ", calc.power(2, 8));             // 256
console.log("Square Root: ", calc.squareRoot(16));    // 4
console.log("Percentage: ", calc.percentage(50, 20)); // 10