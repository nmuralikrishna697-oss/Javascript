/* let laptop ={
    Name:'HP',
    Model:'Victus',
    Generation:'I5',
    Color:'Black',
    Price:75000,
}
console.log(laptop);
console.log(laptop.Name);
console.log(laptop['name']); */

/* let employee = {
    name:"David",
}
console.log(employee);
employee.programming="JAvaScript";
console.log(employee);
employee['Id']=1234;
console.log(employee);
 */


/* let employee = {
    name:"David",
    id :12345,
}
console.log(Object.keys(employee));
console.log(Object.values(employee)); */

/* // to merge two objects
let person1 ={
    name:"David",
}
let person2 = {
    Number:"12345",
}
let output=Object.assign(person1,person2);
console.log(output);


let person1 ={
    name:"David",
}
let person2 = {
    Number:"12345",
    name:"MK",
}
let output=Object.assign(person1,person2);
console.log(output); */

/* // nested objects
let person= {
    name:"David",
    number:"12345",
    address:{
        cirty:"Bangalore",
        Area:"Rajajjionagar",
    }
}
console.log(person.address.city); */

// for in loop
// for loop generally used to iterate there objects 
/* let obj = {
    name :"David",
    number : "123456",
}
for (let key in obj){
    console.log(`key:& {key}`);
}
console.log(key);
console.log(obj[key]); */

// for of loop
let arr = ['1','2','3','4',];
for (let value of arr){
    console.log(value);
}

let city = "Bangalore";
for (let char of city){
    console.log(char);
}