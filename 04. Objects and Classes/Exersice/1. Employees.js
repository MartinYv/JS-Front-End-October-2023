function employeeId(input){

let employees = [];

class Employee{
    constructor(name, id){
        this.name = name,
        this.id = id
    }
}

for (const employee of input) {
    
    const emp = new Employee(employee, employee.length);
    employees.push(emp);
}

for (const employee of employees) {
    
    console.log(`Name: ${employee.name} -- Personal Number: ${employee.id}`);
}
}

employeeId([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);