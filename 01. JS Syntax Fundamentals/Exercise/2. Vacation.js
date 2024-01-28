function priceCalculator (groupCount, typeOfGroup, day){

    let totalPrice = 0;

    if (typeOfGroup == "Students") {
        
        if (day == "Friday") {
         totalPrice = groupCount * 8.45;   
        }
        else if (day == "Saturday") {
            totalPrice = groupCount * 9.90;
        }
        else if(day == "Sunday"){
            totalPrice = groupCount * 10.46;
        }

        if(groupCount >= 30){
            totalPrice -= totalPrice * 15 / 100;
            }
    }
    else if(typeOfGroup == "Business"){

        if (day == "Friday") {
            totalPrice = groupCount * 10.90;   
           }
           else if (day == "Saturday") {
               totalPrice = groupCount * 15.60;
           }
           else if(day == "Sunday"){
               totalPrice = groupCount * 16;
           }

           if(groupCount >= 100){
            totalPrice -= (totalPrice / groupCount) * 10;
            }
    }
    else if(typeOfGroup == "Regular"){

        if (day == "Friday") {
            totalPrice = groupCount * 15;   
           }
           else if (day == "Saturday") {
               totalPrice = groupCount * 20;
           }
           else if(day == "Sunday"){
               totalPrice = groupCount * 22.50;
           }

           if(groupCount >= 10 && groupCount <= 20){
            totalPrice -= totalPrice * 5 / 100;
            }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

priceCalculator(110, "Business", "Sunday");
