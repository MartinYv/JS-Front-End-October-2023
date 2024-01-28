function solve(array, step){

let outputArray = [];

for (let index = 0; index < array.length; index += step) {

outputArray.push(array[index]);
   }

 return outputArray;
}

solve(['1', '2', '3', '4', '5'], 6);
solve(['5', '20', '31', '4', '20'], 2);
solve(['dsa', 'asd', 'test', 'tset'], 2);