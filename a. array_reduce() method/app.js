// Find the sum of all numbers in an array:---------
const numbers = [10, 20, 30, 40];

const addition = numbers.reduce((prev, number) => prev + number, 0);

/* same type:- 
const addition = numbers.reduce((prev, number) => {
    return prev + number;
}, 0);
*/
console.log(addition); // result is 100;



// Find the sum of all materials required to build a  house:---------
const materials = [
    {
        name: 'Brick',
        cost: 30000
    },
    {
        name: 'Plaster',
        cost: 24000
    },
    {
        name: 'Wood',
        cost: 50000
    }
];

const totalMaterialCost = materials.reduce((prev, material) => {
    return prev + material.cost;
}, 0);

/* same type:-
const totalMaterialCost = materials.reduce((prev, material) => prev + material.cost, 0); 
*/
console.log(totalMaterialCost);  // return 104000;


// Convert a two-dimensional array of key value pairs into an object:------
const keyValuePairs = [
    ['username', 'Jhone'],
    ['job', 'Actor'],
    ['age', 40],
    ['home', 'America']
]

const obj1 = keyValuePairs.reduce((prev, arrayValue) => {

    const keys = arrayValue[0];
    const value = arrayValue[1];

    prev[keys] = value;

    return prev;

}, {})

console.log(obj1);
/* output:
{ 
    username: 'Jhone', 
    job: 'Actor', 
    age: 40, 
    home: 'America' 
}
*/


// Find the max or min salary of a list of people objects:---
const peoples = [
    {
        name: 'Dom',
        occupation: 'Software Developer',
        salary: 90000
    },
    {
        name: 'Max',
        occupation: 'Mechanic',
        salary: 150000
    },
    {
        name: 'Max',
        occupation: 'Mechanic',
        salary: 220000
    },
    {
        name: 'Beth',
        occupation: 'Teacher',
        salary: 75000
    },

];


const heightSalary = peoples.reduce((prev, people) => {

    if (people.salary > prev) {
        return people.salary;
    }
    return prev;

}, 0);

console.log(heightSalary); // return 220000
