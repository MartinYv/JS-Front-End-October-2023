function parkingLot(input){


    let carsInTheParking = [];

    class Car{
        constructor(plateNumber, direction){
            this.plateNumber = plateNumber,
            this.direction = direction
        }
    }

for (let i = 0; i < input.length; i++) {
    const [direction, plateNumber] = input[i].split(", ");
    
    let car = carsInTheParking.find(x=>x.plateNumber == plateNumber)

     if (car == null) {
        
        let car = new Car(plateNumber, direction);
        carsInTheParking.push(car);
     }
     else{
        car.direction = direction;
     }
}

let carsSorted = carsInTheParking
.filter((c) => c.direction === "IN")
.sort((a, b) => {
  return a.plateNumber.localeCompare(b.plateNumber);
});

if (carsSorted.length == 0) {
    console.log("Parking Lot is Empty");
}
else{
    
    for (const car of carsSorted) {
        console.log(`${car.plateNumber}`);
    }
        
}

}

parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);