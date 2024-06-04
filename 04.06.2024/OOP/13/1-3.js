class Employee{
    // #1
    #name;
    #salary;
    #age;
    // #2
    constructor(name,age,salary){
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }
    // # 3
    print(){
        alert(`name -> ${this.#name}\nage -> ${this.#age}\nsalary -> ${this.#salary}`);
    }
}
let us = new Employee('jh',18,7410);
us.print();