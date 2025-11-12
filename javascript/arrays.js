const arr = [2, 9, 7, 8, 5, 4, 7, 0, 1, -2, 64, 9, 11];
console.log(typeof arr); //types of array is an object

// 2. Ways to Create Arrays
const array = new Array(32, 1, 23, 2, 33, 56);
console.log(array);

// pitfall
const arr_1 = new Array(5);
console.log(arr_1.length);

// Common Array Methods
// Let’s divide them into Categories 👇
// 🏗 A. Adding / Removing Elements

let nums = [1, 2, 3];
nums.push(4); // [1, 2, 3, 4]
nums.pop(); // [1, 2, 3]
nums.unshift(0); // [0, 1, 2, 3]
nums.shift(); // [1, 2, 3]

// | Method      | Description       | Example          |
// | ----------- | ----------------- | ---------------- |
// | `push()`    | Add to end        | `arr.push(4)`    |
// | `pop()`     | Remove from end   | `arr.pop()`      |
// | `unshift()` | Add to start      | `arr.unshift(0)` |
// | `shift()`   | Remove from start | `arr.shift()`    |

// B. Iteration & Transformation

const arr_2 = [1, 2, 3, 4, 5];

// forEach
arr_2.forEach((num) => console.log(num));
console.log(arr_2, "For-Each-Method");

// map
const doubled = arr_2.map((num) => num * 2); // [2, 4, 6, 8, 10]
console.log(arr_2, "Map-Method");

// filter
const even = arr_2.filter((num) => num % 2 === 0); // [2, 4]
console.log(arr_2, "Filter-Method");

// reduce
const sum = arr_2.reduce((acc, cur) => acc + cur, 0); // 15

// find
const firstEven = arr_2.find((num) => num % 2 === 0); // 2

// some & every
arr_2.some((num) => num > 4); // true
arr_2.every((num) => num < 10); // true

// | Method      | Description                | Returns      |
// | ----------- | -------------------------- | ------------ |
// | `forEach()` | Loop through each element  | `undefined`  |
// | `map()`     | Creates new array          | New Array    |
// | `filter()`  | Filters items by condition | New Array    |
// | `reduce()`  | Reduces to single value    | Single Value |
// | `find()`    | Returns first match        | Single Item  |
// | `some()`    | Checks if any match        | Boolean      |
// | `every()`   | Checks if all match        | Boolean      |

const checkAllValuesSum = (array_data) => {
  const SumVal = array_data.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  return SumVal;
};
console.log(checkAllValuesSum([3, 4, 5, 10, 3, 5]));

// | Step | Current Element (`cur`) | Accumulator Before | Expression `acc + cur` | Accumulator After |
// | ---- | ----------------------- | ------------------ | ---------------------- | ----------------- |
// | 1    | 1                       | 0                  | 0 + 1                  | 1                 |
// | 2    | 2                       | 1                  | 1 + 2                  | 3                 |
// | 3    | 3                       | 3                  | 3 + 3                  | 6                 |
// | 4    | 4                       | 6                  | 6 + 4                  | 10                |

// C-Manipulating Content

// | Method      | Description                          |
// | ----------- | ------------------------------------ |
// | `concat()`  | Merges arrays                        |
// | `slice()`   | Returns part of array (non-mutating) |
// | `splice()`  | Add/remove items (mutates original)  |
// | `flat()`    | Flattens nested arrays               |
// | `flatMap()` | Maps & flattens                      |

//.  0          1.       2.       3.        4
const fruits = ["apple", "banana", "cherry", "mango", "grapes"];
const result = fruits.slice(1, 4); // 1 index at banana so banane will include in new array and 4th index grapes value will not be included in the array...
console.log(result, "slice-array");
console.log(fruits, "origial array");

//splice methods
// syntax
// array.splice(start, deleteCount, item1, item2, ...);
// 1-start: index where to start changing the array
// 2-deleteCount: number of elements to remove
// 3-item1, item2, ...: optional — elements to insert..

const fruit = ["apple", "banana", "cherry", "mango", "grapes"];
// const removed=fruit.splice(1,2)
// console.log(removed,"removed-element")
// console.log(fruit, "remained-element");
// const add = fruit.splice(1, 0, "lees", "bees", "trees", "sleves"); //add-element
const replace = fruit.splice(1, 1, "preet"); //replace-element
console.log(replace, "replace");
console.log(fruit);

// flat-methods

const arr_3 = [1, 2, [3, 4]];
const results = arr_3.flat();
console.log(results, "results-flatten");
const flatarr = [1, [2, [3, [4, 5]]]];
console.log(flatarr.flat(Infinity), "flated-array");
const flatten = (arr) => arr.flat(Infinity);
console.log(flatten([1, [2, [3, [4, 5]]]]));

const arr_map = [1, 2, 3];
const final = arr_map.flatMap((num) => [num, num * 2]);
console.log(final, "map-mehtod");

// 🧭 D. Searching & Checking
// | Method        | Description              |
// | ------------- | ------------------------ |
// | `indexOf()`   | Finds index of value     |
// | `includes()`  | Checks if exists         |
// | `findIndex()` | Finds index by condition |

const animals = ["cat", "dog", "rat"];
console.log(animals.includes("dog")); // true
console.log(animals.indexOf("rat")); // 2
console.log(animals.findIndex((a) => a.startsWith("c"))); // 0
