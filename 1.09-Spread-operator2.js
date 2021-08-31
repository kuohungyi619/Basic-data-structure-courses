// With more traditional syntaxes, we can concatenate arrays,
// but this only allows us to combine arrays at the end of one, and at the start of another. 
// Spread syntax makes the following operation extremely simple:

let thisArray = ['sage', 'rosemary']
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

