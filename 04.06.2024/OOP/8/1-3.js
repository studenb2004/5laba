class Student{
    // # 2
    cape() {
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
    // # 3
    initial(){
        return this.name[0].toUpperCase() + '.' + this.surn[0].toUpperCase();
    } 
}
let uy = new Student;
 // # 1
uy.name = 'viktor';
uy.surn = 'coy';
console.log(uy.cape());
console.log(uy.initial());