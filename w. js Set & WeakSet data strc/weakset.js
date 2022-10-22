/* ==== JavaScript WeakSet data structure ==== */


const ws = new WeakSet();

const obj1 = {
    a: 10,
    b: 20,
    c: 30
};
const obj2 = {
    a: 40,
    b: 50,
    c: 60
};
const obj3 = {
    a: 70,
    b: 80,
    c: 90
};
const obj4 = {
    a: 100,
    b: 110,
    c: 120
};

ws.add(obj1).add(obj2).add(obj2).add(obj3).add(obj4).delete(obj2);

console.log(ws);
/* 
0: {a: 70, b: 80, c: 90}
1: {a: 100, b: 110, c: 120}
2: {a: 10, b: 20, c: 30}
*/


// How I use WarkSet data structure:---------  

class Person {
    constructor() {

    }

    method() {
        return 'Hello Js';
    }
}

console.log(Person.prototype.method());  // output: Hello Js;


// How to use WeakSet data structure:---------
const myWeakSet = new WeakSet();


class Person2 {
    constructor() {
        myWeakSet.add(this);
    }

    method() {
        if (!myWeakSet.has(this)) {
            throw new Error('sorry error is hear.');
        }
        else {
            return 'Hello Js. This is my Js File';
        }
    }
};

const siful = new Person2();
console.log(siful.method());  // output: 'Hello Js. This is my Js File';

// console.log(Person2.prototype.method());   // error

