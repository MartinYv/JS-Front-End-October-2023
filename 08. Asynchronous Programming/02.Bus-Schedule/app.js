function solve() {

    let nextStopId = 'depot';
    let nextStopName = '';

    let info = document.querySelector('#schedule #info span');

    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    function depart() {

        departButton.disabled = true;
        arriveButton.disabled = false;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`).then(response => {

            return response.json();

        }).then(stop => {

            info.textContent = `Next stop ${stop.name}`;

            nextStopId = stop.next;
            nextStopName = stop.name;

        }).catch(error => {

            info.textContent = `Error`;

            departButton.disabled = true;
            arriveButton.disabled = true;

            return error;
        })
    }

    async function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;

        info.textContent = `Arriving at ${nextStopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();