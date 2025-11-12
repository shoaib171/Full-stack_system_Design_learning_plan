array = [9, 2, 6, 3, 1, 0];
// for (let i = 0; i < array.length; i++) {
//   console.log(i, array[i]);
// }

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i]);
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log(j, array[j + 1]);
      if (array[j] > array[j + 1]) {
        let temperory = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temperory;
      }
    }
  }
  return array;
}

function DessortArray(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i]);
    for (let j = 0; j < array.length - i - 1; j++) {
      //   console.log(j, array[j]);
      if (array[j] < array[j + 1]) {
        let temperory = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temperory;
      }
    }
  }
  return array;
}
console.log(sortArray(array));
console.log(DessortArray(array));

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
