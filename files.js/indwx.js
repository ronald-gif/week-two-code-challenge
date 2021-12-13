// console.log("hello world");


// var users = {
//     name : "Biyinzika Ronald",
//     email : "ronald@gmail.com",
//     login(){
//         console.log(this.email, "has loged in");
//     },

//     logout(){
//         console.log(this.email, "has loged in");
//     }
// }
// // console.log(users.email);
// login();

// class decleration
// class square{
//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }
// }

// // class expression
// let polgon = class{
//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }
// }
// console.log(square.name);



// class Ronald{
//     constructor(height,width,length){
//         this.height = height;
//         this.width = width;
//         this.length = length;
//     }

//     // getter
//     get area(){
//         return this.calcArea()
//     }

//     // method
//     calcArea(){
//         return this.height * this.width * this.length
//     }
// }
// const answer = new Ronald(4,4,4)
// console.log(answer.area);

// class Mico{
//     constructor(num1,num2,num3,num4){
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.num4 = num4;
//     }

//     // getter
//     get sum(){
//         return this.sumNumber()
//     }

//     // method
//     sumNumber(){
//         return this.num1 * this.num2 * this.num3 * this.num4
//     }
// }

// const results = new Mico(10,10,10,10);
// console.log(results.sum);


// class myTraits{
//     constructor(gmail,Name,age){
//         this.gmail = gmail;
//         this.Name = Name;
//         this.age = age;
//     }

//     // methods
//     loggedin(){
//         console.log(this.gmail, "has loggedin");
//     }
//     loggedout(){
//         console.log(this.gmail, "hass logged out");
//     }
//     thereName(){
//         console.log("you are ", this.age, "years old")
//     }
// }

// var traits1 = new myTraits("mico@gmail.com","Rose",45);
// var traits2 = new myTraits("ronnie@gmail.com","Recheal",20);
// var traits3 = new myTraits("john@gmail.com","john",60);

// // console.log(traits1)
// // console.log(traits2)
// // console.log(traits3)

// // class call
// traits1.loggedin(); 
// traits2.loggedout();
// traits3.thereName();

// var car = "V8";
// function ronie(){
//     console.log(car)
    
// }
// ronie();


// let details = {
//     name: "ronald",
//     age: 21,
//     email: "@gmail.com",
//     course: "DP",
//     start(){
//         return this.email
//     },
//     end(){
//         console.log(this.email, "has  logged out")
//     }
// }
// console.log(details.email);
// details.start();
// details.end();

// let add = (a, b,...nums) =>{
//     console.log(a);
//     console.log(b);
//     console.log(nums)
//     let total = 0;

//     for(const n of nums){
//         total +=  n
//     }
//     return total;
// }
// console.log(add(2,5,9,4,7));

// let divid = (a,b,...numbers) => {
//     console.log(numbers);
//     let startingPoint = 0;

//     for(const x of numbers){
//         startingPoint += x
//     }
//     return startingPoint;
// }
// console.log(divid(1,2,3,4,5,6));

// const odd = [1,2,3];
// const combined = [4,6,8,10,...odd];
// console.log(combined);

// let letters = ['A','B','C']
// let moreNumbers = [1,2,3,4]
// let allLetterNumbers = [...letters, ...moreNumbers]

// console.log(allLetterNumbers);

// let theseLetters = () => {
//     return ["ronald","Mico","John","Rose","Meachel","Gloria","Rogers"]
// }
// let [x,y,...letts] =theseLetters();
// console.log(x)
// console.log(y)
// console.log(letts)



function paerticla(x,y,...args){
    console.log(x)
}
paerticla(2.3,4,0,89,4,3);
