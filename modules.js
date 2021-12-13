import Users from '/rest'

 

var userOne = new Users("Ronald", "ron@gmail.com");
console.log(userOne);



// function Employee(name ,age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.monthlyBonus = 10000;

//     this.getFinalSalary = function(){
//         let finalSalary = this.salary + this.monthlyBonus;
//         console.log(finalSalary)
//     }

//      this.getDetails = function(){
//         console.log("Name: " + this.name  +"\n age: " + this.age)
//     }

// }

// let details = new Employee("Ronald", 24, 30000)
// // someone can change the monthly the monthly bonus
// details.monthlyBonus = 20000;

// details.getDetails()

// details.getFinalSalary()


// abstraction

// function Employee(name ,age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     let monthlyBonus = 10000;

//     let getFinalSalary = function(){
//         let finalSalary = salary + monthlyBonus;
//         console.log(finalSalary)
//     }

//      this.getDetails = function(){
//         console.log("Name: " + this.name  +"\n age: " + this.age)
//         getFinalSalary()
//     }

// }

// let details = new Employee("Ronald", 24, 30000)
// details.monthlyBonus = 1000
// details.getDetails()



// class User{
//     constructor(username, email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     getInformation(){
//         console.log("your username is ", this.username )
//     }

//     getPersonalDetails(){
//         console.log("your email is ", this.email, " and password is", this.password  )
//     }
// }

// let mike = new User("Ronald", "rony@gmail.com", "43klu@");
// // mike.getInformation()
// // mike.getPersonalDetails()

// // inheritance

// class SpecialEmployee extends User{
//     constructor(username, email, password, yahoo){
//         super(username, email,password)
//         this.yahoo = yahoo;
//     }

//     userYahoo(){
//         console.log("your yahoo is ", this.yahoo);
//     }
// }
// let adim = new SpecialEmployee("Ronald", "rony@gmail.com", "43klu@", "mike@yahoo.com");
// adim.userYahoo()
// adim.getInformation()
// adim.getPersonalDetails()