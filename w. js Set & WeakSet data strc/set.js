/* ==== JavaScript Set() data structure ==== */


// use Set data structure:------------
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
console.log(mySet);  // output: { 1, 2, 3, 4 };

mySet.delete(2);
console.log(mySet);  // output: { 1, 3, 4 };


// mySet.clear();
console.log(mySet);  // output: {};


// use array in Set() method:--------- 
const myArray = [1, 2, 3, 3, 4, 4, 5, 3, 6, 4, 7, 8];

const mySet2 = new Set(myArray);

console.log(mySet2);  // output: { 1, 2, 3, 4, 5, 6, 7, 8 };



// use Set() convert to array:---------
const mySet3 = new Set([1, 2, 3, 4, 5]);
console.log(mySet3);  // output: { 1, 2, 3, 4, 5 };


const myArray2 = [...mySet3];
console.log(myArray2); // output: [ 1, 2, 3, 4, 5 ];


// Unique value stored:---------
const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8];

const uniqueValue = [...new Set(myArray3)];
console.log(uniqueValue);  // output: [ 1, 2, 3, 4, 5, 6, 7, 8 ];


// Use Union set:---------
const a = [1, 2, 3, 4, 2, 4, 3];
const b = [1, 3, 4, 2, 3, 4, 3, 4, 6];

const union = [...new Set([...a, ...b])];
console.log(union);  // [ 1, 2, 3, 4, 6 ];


// Use intersection set:---------
let c = new Set([1, 2, 3, 4, 2, 4, 3, 6, 7]);
let d = new Set([1, 3, 4, 2, 3, 4, 3, 4, 6, 7]);


const intersection = new Set([...c].filter(ele => d.has(ele)));
console.log([...intersection]);  // output: [ 1, 2, 3, 4, 6, 7 ];


// Use difference set:--------- 
let e = new Set([1, 2, 3, 4, 2, 4, 3, 10]);
let f = new Set([3, 4, 2, 3, 4, 3, 4, 6, 7]);

const difference = new Set([...e].filter(ele => !f.has(ele)));
console.log(difference);  // output: { 1, 10 };



//  add object in set:------------
const mySet4 = new Set();

mySet4.add({
    a: 10,
    b: 20
});
mySet4.add({
    a: 10,
    b: 20
});

console.log(mySet4);  // output: { { a: 10, b: 20 }, { a: 10, b: 20 } }


// Use unique object:---------
const mySet5 = new Set();

const obj1 = {
    a: 10,
    b: 20,
    c: 40
};

const obj2 = {
    a: 100,
    b: 200,
    c: 400
};

mySet5.add(obj1).add(obj1).add(obj2);

console.log(mySet5);  // output: { { a: 10, b: 20, c: 40 }, { a: 100, b: 200, c: 400 } };





