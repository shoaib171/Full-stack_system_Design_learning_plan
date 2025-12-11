/* 🧩 What is a Closure?
 Def:A closure is when a function remembers the variables from its outer scope, even after that outer function has finished running.
 In other words:
 A closure allows a child function to access the variables of its parent function, even after the parent has returned.*/

function outer() {
  let count = 0; // variable in outer scope

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() runs once
counter(); // 1
counter(); // 2
counter(); // 3
/*
  
🔍 What happens:

outer() creates a variable count

inner() uses that variable

When outer() returns inner, the variable count stays in memory

That’s the closure

✅ The inner function “closes over” the count variable.

⚙️ Why It Works
Normally, when a function finishes, its variables are destroyed.
But in closures, JavaScript keeps the variables alive if they’re being used by an inner function that still exists.

*/

/*💡 Real-World Example — Private Variables
                 Closures let you create private data that can’t be accessed directly from outside.*/

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counters = createCounter();

console.log(counters.increment()); // 1
console.log(counters.increment()); // 2
console.log(counters.getCount()); // 2
console.log(counters.count); // ❌ undefined (private)
// count is hidden — only accessible through the returned functions.



//🧠 Another Example – Function Factory
function greet(name) {
  return function(message) {
    console.log(`${message}, ${name}!`);
  };
}

const greetShoaib = greet("Shoaib");
greetShoaib("Hello"); // Hello, Shoaib!
greetShoaib("Good Morning"); // Good Morning, Shoaib!


// ⚡ Key Points
// | Concept          | Explanation                                                 |
// | ---------------- | ----------------------------------------------------------- |
// | **Definition**   | Function that remembers variables from its outer scope      |
// | **Created when** | A function is defined inside another function               |
// | **Can access**   | Outer function’s variables                                  |
// | **Use cases**    | Private data, function factories, event handlers, callbacks |


