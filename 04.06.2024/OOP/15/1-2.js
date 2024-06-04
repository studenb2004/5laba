class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	
	getName() {
		return this._name;
	}
	getSalary() {
		return this._salary;
	}
}
// #2
    class Employee2{
        constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.addSign(this.salary);
	}
	
	_addSign(num) {
		return num + '$';
	 }
    }