/* === JavaScript Truthy and falsy value === */


/* All falsy value:

1. false
2. 0
3. null
4. undefined
5. NaN
6. '' empty string
*/

// 1st example Check boolean context:-------
const a = 'Nomaan';

if(a){ 
    console.log('This is truthy value.');
}
else{
    console.log('Never this is not truthy value.');
}
// output This is truthy value. Because string is a truthy value.


// 2nd example. check boolean context:-------
const b = '';

if(!b){
    console.log('This is a falsy value.');
}
else{
    console.log('This is a truthy value.');
}
// output This is a falsy value. Because empty string is a falsy value.

