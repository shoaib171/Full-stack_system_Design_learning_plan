{
  /* <button id='my-btn'>Cick me to solve promise</button>

document.getElementById('my-btn').addEventListener('click', () => {
    console.log("proceed")
    new promise((resolve)=>setTimeout(resolve,2000).then(()=>{
        alert("Promise is solved")
    }
    ))
}); */
}

// const FindConsectiveNuber=(arr)=>{
//     let result = []
//     let temp=[]
//     for(let i=0; i < arr.length; i++){
//         if(i > 0 && arr[i] === arr[i-1])
//             {
//                 temp.push(arr[i])

//             }

//             else{
//                 if(temp.length>=3) result.push(...temp)
//                     temp=[arr[i]]
//             }
//     };
//     if(temp.lenght >=3)result.push(...temp)
//         return result

// }

// const arr=[1,2,3,4,4,4,5,6,6,7,7,4,4,6,6,4]
// console.log(FindConsectiveNuber(arr))

function findConsecutiveNumber(arr = [], target = 0) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1] && arr[i] === target) {
      return true;
    }
  }

  return false;
}
const arr = [1, 2, 3, 4, 4, 4, 5, 6, 6, 7, 7, 4, 4, 6, 6, 4];
console.log(findConsecutiveNumber(arr));


