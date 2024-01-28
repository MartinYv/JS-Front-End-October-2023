const calculator = {
    multiply: (x, y) =>  x * y,
    divide: (x, y) => x / y,
    subtract: (x, y) => x - y,
    add: (x, y) => x + y,
};

function calculate(numOne, numTwo, operator){
    const calculator = {
        multiply: (x, y) =>  x * y,
        divide: (x, y) => x / y,
        subtract: (x, y) => x - y,
        add: (x, y) => x + y,
    };

   const fun = calculator[operator];
        
   if (!fun) {
    return 0;
   }

 return calculator[operator](numOne, numTwo);
}

const result = calculate(5, 5, "multiply");
console.log(result);