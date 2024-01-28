function createPerson(firstName, lastName, age){

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let person = new Person(firstName, lastName, age);

return person;
}

createPerson("Peter", "Pan", "20");