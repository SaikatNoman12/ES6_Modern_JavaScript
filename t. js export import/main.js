/* ==== JavaScript import and exports ==== */


// import export1 js file
import { pi, a } from './export1.js';
console.log(pi, a);  // output: 1000 200;


// use named import export1 js 
import { pi as varPi, a as varA } from './export1.js';
console.log(varPi, varA);  // output: 1000 200;


// use default import export1 js
import external from './export1.js';
console.log(external);  // output: 10000000;


// use named import and default export1 js:---------
import external1, { a as varA1, pi as varPi1 } from './export1.js';
console.log(external1, varA1, varPi1);  // output: 10000000 2000 1000;



// use named import function end default function export2 js:--------- 
import externalFunc, { myFunc } from './export2.js';

myFunc();  // output: This is a function 1;

externalFunc();  // output: This is a function 2;


// use named import and function export2 js:---------
import {myFunc as funcBody} from './export2.js';

funcBody(); // output: This is a function 1;



