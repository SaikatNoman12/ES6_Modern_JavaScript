/* ==== JavaScript Object shortcut ==== */


// Use object Object.keys() method:---------
const obj1 = {
    name: 'Siful Emon',
    age: 20,
    work: 'Developer',
    company: 'Todos'
};
const keys = Object.keys(obj1);

console.log(keys);   // output: [ 'name', 'age', 'work', 'company' ];


// Use object Object.values() method:---------
const obj2 = {
    name: "Mohin Uddin",
    age: 30,
    work: 'Developer',
    company: 'SIMEC'
};

const values = Object.values(obj2);

console.log(values);  // output: [ 'Mohin Uddin', 30, 'Developer', 'SIMEC' ];


// Use object Object.entries() method:---------
const obj3 = {
    name: 'Niloy Kader',
    age: 20,
    work: 'Designer',
    company: 'SIMEC'
};

const entries = Object.entries(obj3);

console.log(entries);

/* Output:
[
  [ 'name', 'Niloy Kader' ],
  [ 'age', 20 ],
  [ 'work', 'Designer' ],
  [ 'company', 'SIMEC' ]
]
*/


// Use object shortcut:---------
const num1 = 20;
const num2 = 10;

const mul = num1 * num2;

const obj4 = {
    name: 'Shamim Hossain',
    age: 30,
    work: 'AI',
    num1,
    num2,
    mul
};

console.log(obj4);
/* Output
{
  name: 'Shamim Hossain',
  age: 30,
  work: 'AI',
  num1: 20,
  num2: 10,
  mul: 200
}
*/
