// how to us a constructor function
class Ronald{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    getAge(){
        return this.age
    }
    
}
let newRony = new Ronald("Mic", 20);
console.log(newRony.getAge())

// constructors
class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getInformation(){
        console.log("your username is ", this.username )
    }

    getPersonalDetails(){
        console.log("your email is ", this.email, " and password is", this.password  )
    }
}

let mice = new User("Ronald", "rony@gmail.com", "43klu@");
mice.getInformation()
mice.getPersonalDetails()

// constructor
class Student{
    constructor(name,index,){

        this.name = name;
        this.index = index;
    }

    getName(){
        console.log("Student's is", this.name)
    }
}

let bob = new Student("Rechard", "UEU01/332");
bob.getName()
