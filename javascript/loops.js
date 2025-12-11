array = [9, 2, 6, 3, 1, 0];

for (let i = 0; i < array.length; i++) {
  console.log(i, array[i]);
}

// 1. Loop Control Statements
// ✅ continue
// Skips the current iteration and moves to the next one.
// ✅ break
// Stops the loop completely.

for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 4) continue;
  console.log(i);
}
const fruits = ["apple", "banana", "cherry"];
const fruitIteration = (fruits) => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ofFruits ${i}: ${fruits[i]}`);
  }
};
fruitIteration(fruits);

const arr = ["g", "n", "a", "p", "d"];
for (let i = 0; i < arr.length; i++) {
  console.log(`string index ${i}, string:${arr[i]} `);
}

const CopyReduce = [3, 4, 10, 6, 9, 8, 0, 13]; //53 output
let total = 0;
for (let i = 0; i < CopyReduce.length; i++) {
  total += CopyReduce[i];
}
console.log(total);

//working with 2D arrays.

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   console.log(`outer-loop ${i}: Each-row:${matrix[i]}`);
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

const matrix3D = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ],
  [
    [13, 14, 15],
    [16, 17, 18],
    [19, 20, 21],
  ],
];

for (let i = 0; i < matrix3D.length; i++) {
  // console.log(`outer-loop ${i}: Each-row:${matrix3D[i]}`);
  for (let j = 0; j < matrix3D[i].length; j++) {
    // console.log(`second-inner-loop ${(i, j)}: ${matrix3D[i][j]}`);
    for (let k = 0; k < matrix3D[i][j].length; k++) {
      console.log(matrix3D[i][j][k]);
    }
  }
}

/*
Index meaning:

matrix3D[i] → layer

matrix3D[i][j] → row

matrix3D[i][j][k] → actual number

*/

// while loop

// Real Life Example:

// Imagine you’re filling water bottles.

// Rule:
// ➡️ As long as there is an empty bottle, keep filling.

// That means you check the condition first before working.

let emptyBottles = 5;

while (emptyBottles > 0) {
  console.log("Filling a bottle...");
  emptyBottles--;
}


// | Loop Type    | Real Life Meaning               | Example                                |
// | ------------ | ------------------------------- | -------------------------------------- |
// | **while**    | Check condition first, then act | Only eat if you’re hungry              |
// | **do…while** | Do something first, then check  | Taste food first, then decide if yummy |
