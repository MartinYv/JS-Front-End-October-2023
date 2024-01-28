function attachEvents() {

    let inputLocation = document.getElementById('location');
    document.getElementById('submit').addEventListener('click', forecast);

    function forecast(e) {
        document.getElementById('forecast').style.display = 'block';

        let location = inputLocation.value;

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`).then(response => {
            return response.json();
        }).then(locations => {

            const searchObject = locations.find((obj) => obj.name == location);
            let cityCode = searchObject.code;

            fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`).then(response => {
                return response.json();
            }).then(town => {
                
                // to add here
                let allTodayForecasts = document.getElementById('current');

                let divForecast = document.createElement('div');
                divForecast.className += 'forecasts';
                allTodayForecasts.appendChild(divForecast);

                let spanConditionSimbol = document.createElement('span');
                spanConditionSimbol.className = 'condition symbol';
                spanConditionSimbol.innerHTML = getWheaterIcon(town.forecast.condition);
                divForecast.appendChild(spanConditionSimbol);

                //to add here city name and country, min/max, condition
                let spanCondition = document.createElement('span');
                spanCondition.className = 'condition';

                let spanCityAndCountry = document.createElement('span');
                spanCityAndCountry.className = 'forecast-data';
                spanCityAndCountry.textContent = town.name;
                spanCondition.appendChild(spanCityAndCountry);

                let spanDegrees = document.createElement('span');
                spanDegrees.className = 'forecast-data';
                spanDegrees.textContent = `${town.forecast.low}${String.fromCharCode(176)}/${town.forecast.high}${String.fromCharCode(176)}`;
                spanCondition.appendChild(spanDegrees);

                let spanTodaysCondition = document.createElement('span');
                spanTodaysCondition.className = 'forecast-data';
                spanTodaysCondition.textContent = town.forecast.condition;
                spanCondition.appendChild(spanTodaysCondition);

                divForecast.appendChild(spanCondition);
                // console.log(weather.name); //city name and country
                // console.log(weather.forecast); //condition: 'Sunny', high: '19', low: '8

                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`).then(response => {
                    return response.json();
                }).then(town => {
                    //to append here
                    let divUpcoming = document.getElementById('upcoming');

                    let divForecastInfo = document.createElement('div');
                    divForecastInfo.className = 'forecast-info';
                    divUpcoming.appendChild(divForecastInfo);

                    for (let i = 0; i < town.forecast.length; i++) {

                        let dailyForecastInfo = document.createElement('span');
                        dailyForecastInfo.className = 'upcoming';
                        divForecastInfo.appendChild(dailyForecastInfo);

                        let symbol = document.createElement('span');
                        symbol.className = "symbol"
                        dailyForecastInfo.appendChild(symbol);

                        symbol.innerHTML = getWheaterIcon(town.forecast[i].condition);

                        let degrees = document.createElement('span');
                        dailyForecastInfo.appendChild(degrees);
                        degrees.className = 'forecast-data';
                        degrees.textContent = `${town.forecast[i].low}${String.fromCharCode(176)}/${town.forecast[i].high}${String.fromCharCode(176)}`;

                        let condition = document.createElement('span');
                        dailyForecastInfo.appendChild(condition);
                        condition.className = 'forecast-data';
                        condition.textContent = `${town.forecast[i].condition}`;

                        divForecastInfo.appendChild(dailyForecastInfo);            
                    }

                    //returns .forecast(3 arrays with -{condition: 'Partly sunny', high: '17', low: '6'}) and .name
                }).catch(error => {
                    return error;
                })
            }).catch(error => {
                return error;
            })

        }).catch(error => {
            document.getElementById('forecast').textContent = 'Error';

            return error;
        })

    }

    function getWheaterIcon(weatherAsText) {
        switch (weatherAsText) {
            case 'Sunny':
                return '&#x2600;';
            case 'Partly Sunny':
                return '&#x26C5;';
            case 'Overcast':
                return '&#x2601;';
            case 'Rain':
                return '&#x2614;';
            default:
                return '&#x2600;';
        }
    }

}

attachEvents();