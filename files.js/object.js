// object literals
let employee1 = "Ronald";
let employeeSalary = 200000;
let employeePosition = "manager";

let employeeObject = {
    employee1,
    employeeSalary,
    employeePosition
}

console.log(employeeObject.employee1)
console.log(employeeObject.employeeSalary)
console.log(employeeObject.employeePosition)


// object literal
let studentName = "Mico Ronnie";
let stream = "Strea A";
let grade = "first grade";
let gmail =  "mic09@gmail.com";

let studentDetails = {
    studentName,
    stream,
    grade,
    gmail,

    login(){
        console.log(`${gmail} has logged in`)
    }
}

studentDetails.login()
console.log(studentDetails.studentName)
console.log(studentDetails.stream)
console.log(studentDetails.grade)


// object literal with function
let num1 = 7;
let num2 = 10;
let num3 = 20;
let num4 = 30;

let addNumbers = (num1,num2,num3,num4) => {

        
    return {
        
        num1,
        num2,
        num3,
        num3,
        
    }

}
let sumOfAllNumbers = num1 + num2 + num3 + num4 
console.log(sumOfAllNumbers)

// let characters = {
//     name: "Ronald Mico",
//     age: 20,
//     email: "micoronie@gmail.com",
//     course: "programming",
//     login(){
//         console.log(this.email, "has logged in")  // this refers to the object in this case 
//     }
// }

// console.log(characters.email);

// characters.login()