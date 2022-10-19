/* ==== JavaScript Ternary Operator ==== */


// use single ternary operator:---------
const age = 20;

const type = age >= 18 ? 'Adult' : 'Child';
console.log(type);   // output: Adult;


// use multiple ternary operator:---------
const age2 = 17;

const type2 = age2 >= 18 ? 'Adult' : age2 < 10 ? 'Child' : 'Young';
console.log(type2);   // output: young;


// return true or false do not use ternary operator:--------- 
const age3 = 30;

const type3 = age3 >= 30;
console.log(type3);   // output: true;