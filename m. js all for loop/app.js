/* ==== JavaScript array for loop, for of loop, for in loop ==== */


// use for loop;

const array = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
/* Output:
a
b
c
d
e
f
*/

const myString = "Hello";

for (let i = 0; i < myString.length; i++) {
    console.log(myString[i]);
}
/* Output:
H
e
l
l
o
*/


// Use for of loop:------------

const array2 = ['a', 'b', 'c', 'b', 'd'];

for (let element of array) {
    console.log(element);
}
/* Output: 
a
b
c
d
e
f
*/


const myString2 = "Hello JavaScript";

for (let caractere of myString2) {
    console.log(caractere);
}
/* Output: 
H
e
l
l
o

J
a
v
a
S
c
r
i
p
t
*/

// Use for in loop:---------

const obj1 = {
    name: 'Jhone',
    age: 30,
    job: 'JS developer'
};

for (let property in obj1) {
    console.log(obj1[property]);
}
/* Output: 
Jhone
30
JS developer
*/


const array3 = ['a', 'b', 'c', 'd'];

for (let element in array3) {
    console.log(element);
}
/* Output: 
0
1
2
3
*/


const myString3 = "Hello";

for (let stringCrac in myString3) {
    console.log(stringCrac);
}
/* Output:
0
1
2
3
4
*/
