/* ==== JavaScript Array splice() method ==== */


// use array splice() method:-------
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const res = array.splice(2, 3, 102, 103, 104);

console.log(array);  // output: [ 1, 2, 102, 103, 104, 6, 7, 8 ];

console.log(res); // output: [ 3, 4, 5 ];


// use negative number:---------
const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];

const res2 = array2.splice(-2, 2, 'hello', 'javascript');

console.log(array2);  // output: ['a', 'b', 'c', 'd', 'hello', 'javascript'];

console.log(res2);  // output: ['e', 'f'];


// use array splice() look like array slice():--------- 
const array3 = [1, 2, 3, 4, 5, 6, 7];

const res3 = array3.splice(1, 3);

console.log(array3);  // output: [1, 5, 6, 7];

console.log(res3);  // output: [2, 3, 4];


// use array splice() method differently:---------
const array4 = [1, 2, 3, 4, 5, 6, 7];

const res4 = array4.splice(2, 0, 'hello');

console.log(array4);  // output: [ 1, 2, 'hello', 3, 4, 5, 6, 7 ];

console.log(res4);   // output: [];