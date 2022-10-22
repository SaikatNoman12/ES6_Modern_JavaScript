/* === JavaScript Destructuring === */


// Use normal object destructuring:------------
const obj1 = {
    id: 321,
    name: 'Saiful',
    age: 30
};

const { name } = obj1;
console.log(name);  // output: Saiful;


const { name: x } = obj1;
console.log(x);  // output: Saiful;


// Use nested object destructuring:------------
const obj2 = {
    id: 324,
    name: 'Mehedi',
    age: 30,
    education: {
        degree: 'MS'
    }
};

const { education: { degree } } = obj2;
console.log(degree);  // output: MS;

const { education: { degree: xyz } } = obj2;
console.log(xyz);  // output: MS;


// Use nested object destructuring:------------
const obj3 = {
    id: 325,
    name: 'Moinul',
    age: 53
};

const { degree: abc } = obj3;
console.log(abc);  // output: undefined;

const { education: { edu } = {} } = obj3;
console.log(edu);  // output: undefined;

const { education: { edu: adc } = {} } = obj3;
console.log(adc);  // output: undefined;


// Use nested nested object destructuring:---------
const obj4 = {
    id: 422,
    name: 'Jahid',
    age: 30,
    education: {
        ssc: 2028,
        hsc: 2023,
        bba: {
            university: 'ASA',
            join: 2023,
            end: 2027
        }
    }
};

const { education: { bba: { end } = {} } = {} } = obj4;
console.log(end);  // output: 2027;

const { education: { bba: { join: start } = {} } = {} } = obj4;
console.log(start);  // output: 2023




// Use array destructuring:------------

// single array destructuring:
const array = [1, 2, 3, 4];

const [a, b, c] = array;
console.log(a, b, c);  // output: 1 2 3;

const [, , , four] = array;
console.log(four); // output: 4; 


// nested array destructuring:
const array2 = [1, 2, 3, 4,
    ['hello', 'javaScript', 'angular'],
    5, 6, 7
];

const [, , , , [, js, ang], , six] = array2;
console.log(js, ang, six);  // output: js angular 6;



// nested array object destructuring:
const arrayObj = {
    name: 'Mirja',
    age: 30,
    favNumber: [
        40, 50, 100
    ]
};

const { favNumber: [dd] = [] } = arrayObj;
console.log(dd);  // output: 40;


// Value swap:
let first = 1;
let second = 20;

const temp = first;

first = second;

second = temp;

console.log(first);  // output: 20;
console.log(second);  // output: 1;


// Value swap use destructuring:---------
let first2 = 100;
let second2 = 200;

[second2 ,first2] = [first2, second2];

console.log(first2); // output: 200;
console.log(second2);  // output: 100;






