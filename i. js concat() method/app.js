/* ==== JavaScript array concat() method ==== */


// use concat() method:---------
const array1 = [1, 2, 3, 4, 5];

const array2 = [6, 7, 8, 9, 10];

const array3 = [11, 12, 13, 14];

const array4 = [15, 16, 17, 18];


const newArray = array1.concat(array2, array3, array4);

console.log(newArray);  // output: [ 1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ];

console.log(array1);   // output: [ 1, 2, 3, 4, 5 ];
