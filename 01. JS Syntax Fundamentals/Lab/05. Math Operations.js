function solve(numOne, numTwo, operator){
    if(operator == "+")console.log(numOne + numTwo);
   else if(operator == "-")console.log(numOne - numTwo);
   else if(operator == "*")console.log(numOne * numTwo);
   else if(operator == "/")console.log(numOne / numTwo);
   else if(operator == "%")console.log(numOne % numTwo);
   else if(operator == "**")console.log(numOne ** numTwo);
}

solve(5, 5, "**");