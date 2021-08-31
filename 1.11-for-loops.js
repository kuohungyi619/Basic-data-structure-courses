// The technique which is most flexible and offers us the greatest amount of control is a simple for loop.

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

  // Below is the practice

// filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
// elem represents an element that may or may not be present on one or more of the arrays nested within arr.  

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for ( let i=0; i<arr.length; i++){
      if (arr[i].indexOf(elem) == -1){
        newArr.push(arr[i])
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));