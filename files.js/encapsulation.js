class Employee{

    constructor(){
        let name,marks;
    }

    getName(){
        return this.name;
    }

    setName(name){
    this.name = name;
    }

    getMarks(){
        return this.marks;
    }

    setMarks(marks){
        this.marks = marks;
    }
}
let emp1 = new Employee();
emp1.setName("Ronald");
emp1.setMarks(90)

console.log(emp1.getName());
console.log(emp1.getMarks())


class Students{

    details(email,id){
        this.email = email;
        this.id = id;
    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }
}

let stud01 = new Students();
stud01.details("mike@gmail.com", 90234020);
console.log(stud01.getEmail());
console.log(stud01.getId());