// In order to iterate through all the keys within an object. 
// This requires a specific syntax in JavaScript called a for...in statement.
// For our users object, this could look like:

for (let user in users) {
    console.log(user);
  }

// Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object,
// or the relative order in which it appears, is irrelevant when referencing or accessing that key.

// Below is the example

function countOnline(usersObj) {
    // Only change code below this line
    let countList = 0;
    for (let user in usersObj){
      if (usersObj[user].online === true){
        countList += 1;
      }
    }return countList
    // Only change code above this line
  }