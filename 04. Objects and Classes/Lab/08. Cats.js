function solve(input){

    class Cat {
        constructor(name, age){
            this.name = name,
            this.age = age
        }

       meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
       }
    }
    
    let cats = [];

    for (const line of input) {
        
        let tokens = line.split(" ");
        
        let catName = tokens[0];
        let catAge = tokens[1];

        let cat = new Cat(catName, catAge);
       
        cats.push(cat);
    }
    
    for (const cat of cats) {
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);