document.write("<h1>hello world</h1>");
var x=0;//function scope
let y=10;//global scope
console.log(typeof(y));
let string="hello";
let char='a';
console.log(typeof(string));
console.log(typeof(char));
let myarray=[1,9,0];
console.log(typeof(myarray));
console.log(myarray.length);
const a=10;
let z;
console.log(z);
let firstname="khushi";
let lastname="gupta";
let fullname=firstname +" "+ lastname;
console.log(fullname);
let mystring="there are so many people";
let spiltted=mystring.split(" ");
console.log(spiltted);
let array1=[2,4,6];
let array2=[1,3,5];
let array3=[...array1,...array2];
console.log(array3);
let shift=array1.shift(2);
console.log(shift);
console.log(array1);
let  myFunction=function(p,q){
    let sum=p+q;
    console.log("sum ="+ sum);
}
myFunction(700,8);


let arrowFunction=(p,q) =>{
    let sum=p+q;
    console.log("sum =" + sum);
}
arrowFunction(678,6789);


function multuplyBy(factor){
    return function(number){
        return number * factor;
    }

}

let double=multuplyBy(2);
console.log(double(5));

let person={
    name:"khushi",
    age:19,
    work:"student",


    add:function(x){
        console.log(this.age +x);
    }
}
console.log(person.add(10));



















