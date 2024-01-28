function attachGradientEvents() {
    let result = document.getElementById('result');
    let gradientBox = document.getElementById('gradient');

    gradientBox.addEventListener('mousemove', showPercentage);
    gradientBox.addEventListener('mouseout', hidePercentage)

    function showPercentage(e){
        let percent = e.offsetX / (e.target.clientWidth - 1);
        percent = Math.trunc(percent * 100);

        result.textContent = percent + '%';
    }
    function hidePercentage(e){
        result.textContent = '';
    }
}