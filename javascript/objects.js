// 🧩 1. What is an Object in JavaScript?
// An object is a collection of key–value pairs, where:
// Each key (also called a property) is a string (or symbol)
// Each value can be any type — string, number, array, another object, or even a function (method)

const user = {
  name: "Shoaib",
  age: 25,
  role: "Full Stack Developer",
  skills: ["JavaScript", "TypeScript", "Python"],
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
//🔁 3. Adding / Updating / Deleting Properties
// Add:
user.country = "Pakistan";
// Update:
user.age = 26;
// Delete:
delete user.role;
user.role="Full stack AI Engineer"

// Built-in Object Methods

1-Object.keys()
const user = { name: "Shoaib", age: 25, city: "Lahore" };
console.log(Object.keys(user));
// ['name', 'age', 'city']

2-Object.values()

console.log(Object.values(user));
// ['Shoaib', 25, 'Lahore']

3-Object.entries()
console.log(Object.entries(user));
/*
[
  ['name', 'Shoaib'],
  ['age', 25],
  ['city', 'Lahore']
]
*/

// 🧾 D. Object.assign()
// Copies properties from one or more objects into a target object.

const target = { a: 1 };
const source = { b: 2, c: 3 };

const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2, c: 3 }

// 💡 Note: It mutates the target object.
// If you don’t want mutation, use { ...target, ...source } (spread syntax).

// E. Object.freeze()
Object.seal()
const obj = { x: 10 };
Object.seal(obj);

obj.x = 20;  // ✅ allowed
obj.y = 30;  // ❌ not allowed

console.log(obj); // { x: 20 }

Object.create()
// Creates a new object that inherits from another.
const parent = { role: "Admin" };
const child = Object.create(parent);

child.name = "Shoaib";
console.log(child.role); // 'Admin' (inherited)
console.log(child.name); // 'Shoaib'

// H. Object.hasOwn() / hasOwnProperty()
// Checks if a property exists directly on an object.

const user = { name: "Shoaib" };
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age"));  // false


// I. Object.fromEntries()
// Converts [key, value] pairs back into an object.

const entries = [['name', 'Shoaib'], ['age', 25]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'Shoaib', age: 25 }

// ✅ Summary Table

// | Method                          | Description              | Returns |
// | ------------------------------- | ------------------------ | ------- |
// | `Object.keys(obj)`              | All keys                 | Array   |
// | `Object.values(obj)`            | All values               | Array   |
// | `Object.entries(obj)`           | Key-value pairs          | Array   |
// | `Object.assign(target, source)` | Copies properties        | Object  |
// | `Object.freeze(obj)`            | Locks object completely  | Object  |
// | `Object.seal(obj)`              | Prevents add/remove      | Object  |
// | `Object.create(proto)`          | Inherit from prototype   | Object  |
// | `Object.hasOwn(obj, key)`       | Checks own property      | Boolean |
// | `Object.fromEntries(arr)`       | Builds object from pairs | Object  |
