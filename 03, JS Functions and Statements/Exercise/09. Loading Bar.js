function printLoadBar(percent){

    let bar = "[";

    let charsToAdd = percent / 10;

    for (let i = 0; i < 10; i++) {
      
        if (i < charsToAdd) {
            bar += "%";
            continue;
        }
        
        bar += ".";
    }

    bar += "]";

    if(charsToAdd < 10){
 
        console.log(`${percent}% ${bar}`);
        console.log("Still loading...");
    }
    else{

        console.log("100% Complete!");
        console.log(bar);
    }
}

printLoadBar(30);
printLoadBar(50);
printLoadBar(100);