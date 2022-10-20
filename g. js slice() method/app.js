/* ==== JavaScript array slice() method ==== */


// use slice method:----

const array = [1, 2, 3, 4, 5, 6];


const a = array.slice(1, 3);
console.log(a);  // output: [ 2, 3 ];

const b = array.slice(-1, 6);
console.log(b);  // output: [6];


const c = array.slice(-2, 6);
console.log(c);  // output: [ 5, 6 ];


const d = array.slice();
console.log(d);  // output: [ 1, 2, 3, 4, 5, 6 ];


const e = array.slice(3);
console.log(e);  // output: [ 4, 5, 6 ]


const f = array.slice(2, -2);
console.log(f);  // output: [ 3, 4 ];
