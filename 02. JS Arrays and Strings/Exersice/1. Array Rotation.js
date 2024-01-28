function arrayRotation(array, nTimes) {
    for (let index = 0; index < nTimes; index++) {
     
        const firstElement = array[0];
  
      for (let i = 0; i < array.length - 1; i++) {
       
        array[i] = array[i + 1];
      }
  
      array[array.length - 1] = firstElement;
    }
  
    console.log(array.join(" "));
  }

//   for (let i = 0; i < numRotations; i++) {
//     const firstElement = arr.shift(); // Remove the first element
//     arr.push(firstElement); // Add the first element to the end
//   }


arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);