function focused() {
    
    let fields = Array.from(document.getElementsByTagName('input'));
    
    for (const field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', blur);
    }

    function onFocus(e){
        divParentEl = e.currentTarget.parentElement;
        divParentEl.classList.add('focused');
    }
    function blur(e){
        divParentEl = e.currentTarget.parentElement;
        divParentEl.classList.remove('focused');
    }

}