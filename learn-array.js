// syntax for array[]
/* let arr = ['1','2','3','4','5'];
console.log(arr);

let arr = ['1','2','3','4','5'];
console.log(arr); */

/* let arr = ['1','2','3','4','5'];
console.log(arr.length);
for(let i = 0; i< arr.length;i++ )
{
    console.log("value is",arr[i]);
} */

/* let str = "i am in Bangalore";
for (let i = 0; i< str.split;i++)
{
    console.log("a",str[i]);
} */

let str = " i am in bangalore";
let temp=str.split(" ");
let final = "";
for(let i = 0; i< temp.length;i++){
    if(temp[i].length>final.length){
        final = temp[i];
    }
}
console.log(final);