class Employee{
           
    #name;
    #salary;
    #age;
    // # 2
    constructor(name,salary,age){
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }
    
getName() {
    return this.#name;
}

getSalary() {
    return this.#salary + ' $';
}
getAge(){
    return this.#age;
}
setName(name) {
this.#name = name;
}
// # 1
setAge(age){
    if(age > 0 && age <= 120){
        this.#age = age;
    }
    else {
    throw new Error('age is incorrect');
}
    
}
setSalary(salary){
    this.#salary = salary;
}
}
let u = new Employee('joh',14785,15);
console.log(u.getSalary());    