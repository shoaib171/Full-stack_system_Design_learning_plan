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
// function globalscope() {
//   console.log(a);
// }
// var a = 1;
// globalscope();
// // console.log(a)

// console.log(a); // undefined
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// var a = 1;
// let b = 2;
// const c = 3;


var global = "this will be global";
function testingScopeDefined() {
  var internalGlobal = "this will be second global";
  if (true) {
    let blockScope = "this will be block scope ";
    const Constscope = "this will be constant";
    console.log(global);
    console.log(internalGlobal);
    console.log(blockScope);
    console.log(Constscope);
  }
  console.log(global);
  console.log(internalGlobal);
  //   console.log("blockScope:", blockScope);
}
// testingScopeDefined();

function namePrint(name) {
  const FullName = name;
  return FullName;
}
console.log(namePrint("shybi"));

const checkEven_Odd = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is an even number. 👍`);
  } else {
    console.log(`${number} is an odd number. 👎`);
  }
};
checkEven_Odd(10);
checkEven_Odd(7);
checkEven_Odd(19);


function lifoExample() {
  const stack = [];
  // Push elements (add to stack)
  stack.push('A');
  stack.push('B');
  stack.push('C');
  console.log('Stack after pushes:', stack);
  // Pop elements (remove from top)
  const last = stack.pop();
  console.log('Popped element:', last);
  console.log('Stack after pop:', stack);
}
lifoExample();


function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function afterGreet() {
  console.log("Greeting completed.");
}

greetUser("Alice", afterGreet);




