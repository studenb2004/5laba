class Employee{
    // # 1
    #name;
    #salary;
    #age;
    // # 2
    constructor(name,salary,age){
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }
    // # 3
getName() {
    return this.#name;
}

getSalary() {
    return this.#salary;
}
getAge(){
    return this.#age;
}
}