// spread operator allows us to easily copy all of an array's elements,
// in order, with a simple and highly readable syntax.
// THe spread syntax looks like this: ...

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

// The two array will be the same.

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));