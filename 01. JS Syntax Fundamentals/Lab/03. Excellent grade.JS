function ExelentOrNot(grade){
    if(grade >= 5.50 && grade <= 6){
        console.log("Excellent")
    }
   else if(grade >= 2 && grade < 5.50){
    console.log("Not excellent")
   }
   else{
    console.log("Not valid grade.")
   }
}

ExelentOrNot(6);