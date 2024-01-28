function passValidate(password){

    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
      }

    let passArray = password.split("");

    let IsPassValid = true;

    if (!(passArray.length <= 10 && passArray.length >= 6)) {
        
        console.log("Password must be between 6 and 10 characters");
        IsPassValid = false;
    }

  let result = onlyLettersAndNumbers(password);
  if(result == false){
    console.log( "Password must consist only of letters and digits");
  }

    let integersInPass = 0;
    for (let i = 0; i < passArray.length; i++) {
        
        if (!isNaN(passArray[i])) {

            integersInPass++;
        }
    }


    if (integersInPass < 2) {
        console.log("Password must have at least 2 digits");
        IsPassValid = false;
    }

    if(IsPassValid) {
    console.log("Password is valid")
    }
}

passValidate("logIn");
passValidate('MyPass123');
passValidate('Pa$s$s');