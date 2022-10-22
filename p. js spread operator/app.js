/* ===== JavaScript spread operator ===== */


// Use array for spread operator:---------
const number = [1, 2, 3];

const numbers = [...number, 4, 5, 6, 7, 8];

console.log(numbers); // output: [ 1, 2, 3, 4, 5, 6, 7, 8 ];


// Use array :---------
const number2 = [1, 2, 3];

const a2 = [...number2];

// push new element in numbers2 array;
number2.push(4, 5, 6, 7, 8);


console.log(a2);  // output: [ 1, 2, 3 ]

console.log(number2);  // output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]; 



// spread operator use object:---------
const obj1 = {
    name: 'Siful Emon',
    age: 30
}

const obj2 = {
    job: 'Developer',
    work: 'Full Time'
}

const newObj = {
    ...obj1,
    ...obj2
};

console.log(newObj);

/* 
    { 
        name: 'Siful Emon', 
        age: 30, 
        job: 'Developer', 
        work: 'Full Time' 
    }
*/

