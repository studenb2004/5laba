class Employee{
          
    #name;
    #salary;
    #age;
    
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
return this;
}

setAge(age){
    if(age > 0 && age <= 120){
        this.#age = age;
        return this;
    }
    else {
    throw new Error('age is incorrect');
}
    
}
setSalary(salary){
    this.#salary = salary;
    return this;
}
}
let u = new Employee;
u.setAge(15).setName('vikrot').setSalary(47);
console.log(u.getName());
console.log(u.getAge());
console.log(u.getSalary());