// DataTypes (Primitive or Non Primitive). 
// let const var 

// let a = 200;
// let b = a; //copy the value of a
// b=20; // now it mutable the value of b but not any effect the value of a 
// console.log("a:", a);
// console.log("b:", b);


// const a = 200;
// const b = a; //copy the value of a
// b=20; // now it mutable the value of b but not any effect the value of a 
// console.log("a:", a);
// console.log("b:", b);


  //delcare variable 
function globalscope(){
   console.log(a)
}
var a=1;
globalscope()
// console.log(a)


console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 1;
let b = 2;
const c = 3;

