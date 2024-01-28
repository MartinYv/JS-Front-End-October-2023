function createHeroes(input){

    heroes = [];

    for (const line of input) {
        
        const [heroName, heroLevel, heroItems] = line.split("/");
        const listOfItems = heroItems.split(", ");

        let hero = {
            heroName: heroName,
            heroLevel: Number(heroLevel),
            heroItems: listOfItems
        };

        heroes.push(hero);
    }

    for (const hero of heroes.sort((a, b) => a.heroLevel - b.heroLevel)) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items =>${hero.heroItems.join(", ")}`);
    }
}

createHeroes([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);