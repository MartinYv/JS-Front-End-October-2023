function toggle() {

    const bar = document.getElementById('extra');

    let button = document.getElementsByClassName('button')[0];

    if (button.textContent == 'More') {

        bar.style.display = 'block';
        button.textContent = 'Less';
    }
    else if (button.textContent === 'Less') {

        bar.style.display = 'none';
        button.textContent = 'More';
    }
}