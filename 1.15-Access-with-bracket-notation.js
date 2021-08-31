// In the first object challenge we mentioned the use of bracket notation as a way to access property values
// using the evaluation of a variable. For instance, imagine that our foods object is being used in a program
// for a supermarket cash register. We have some function that sets the selectedFood and we want to check our
// foods object for the presence of that food. This might look like:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

// Below is the practice

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));