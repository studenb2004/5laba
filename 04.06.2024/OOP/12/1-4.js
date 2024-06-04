class Employee{
    // # 1
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    // # 2
    nameEmp(){
        alert(`name -> ${this.name}`);
    }
    // # 3
    salaryEmp(){
        alert(`Salary -> ${this.salary}`);
    }
    // # 4
    salaryUp(){
        this.salary += (this.salary * 0.1);
    }
}
let us = new Employee('jhon', 100);
us.nameEmp();
us.salaryEmp();
us.salaryUp();
us.salaryEmp();