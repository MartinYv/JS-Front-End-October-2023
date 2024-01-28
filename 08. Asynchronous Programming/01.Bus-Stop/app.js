function getInfo() {

    let busId = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let ul = document.getElementById('buses');
    
    ul.innerHTML = '';

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId}`).then(response => {
        //turning the response into the usable data

        // if (response.status != 200) {
        //     stopName.textContent = 'Error';
        //     return  
        // }
        
        return response.json();
    })
        .then(stop => {
            //do whatever you want with this data. This is the data you wanted to get from YOUR_URL

            // if (buses == null) {
            //     return;
            // }
            
            stopName.textContent = stop.name;

            for (const [busId, ariveTime] of Object.entries(stop.buses)) {

                let li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${ariveTime} minutes`;

                ul.appendChild(li);
            }
        }).catch(error => {

            stopName.textContent = 'Error';
            return error;
        });;
}

