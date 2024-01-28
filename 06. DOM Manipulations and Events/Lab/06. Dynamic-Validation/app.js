function validate() {
    let emailEvent = document.querySelector('#email').addEventListener('change', onChange);

    function onChange(e){
        let emailToValidate = e.currentTarget.value;

        const pattern = /^[a-z]+@[a-z]+.[a-z]+$/g;
        
        isValid = pattern.exec(emailToValidate);

        if(isValid == null){
            e.currentTarget.classList.add('error');
        }
        else{
            e.currentTarget.classList.remove('error');
        }
   }
}