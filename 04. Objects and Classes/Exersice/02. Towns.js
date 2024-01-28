function printTowns(townsInput){

    let towns = [];

    for (const townInfo of townsInput) {
        
        const [townName, latitude, longitude] = townInfo.split(" | ");

        let town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        towns.push(town);
    }

   towns.forEach(town => console.log(town));
}

printTowns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);