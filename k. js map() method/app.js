/* === JavaScript array map() method === */


// Use array map() method:---------
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const result = array.map(function (element) {
    return element;
});

console.log(result); // output: [1, 2, 3, 4, 5, 6, 7, 8];


// Use array map() method inner call back function in three parameter:---------
const array2 = [1, 2, 3, 4, 5, 6, 7];

const result2 = array2.map((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
});

console.log(result2);



// Use array map() method:---------
const array3 = [1, 2, 3, 4, 5, 6];

const result3 = array3.map((element) => {
    return element * 2;
});

console.log(result3);  // output: [ 2, 4, 6, 8, 10, 12 ]


// Use map() method. and use this keyword and use normal function:---------
class Person {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    test() {
        return [1, 2, 3, 4, 5, 6, 7, 8];
    }

    showResult() {
        return this.test().map(function (element) {
            return element * this.number;
        }, this);
    }
}
const saiful = new Person('Saiful Emon', 2);

console.log(saiful.showResult());  // output: [ 2, 4, 6, 8, 10, 12, 14, 16 ];


// Use map() method. and use this keyword and use arrow function:---------
class Person1 {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    test() {
        return [1, 2, 3, 4, 5];
    }

    showTest() {
        return this.test().map((element) => {
            return element * this.number;
        });
    }
}
const mohin = new Person1('Mohin Uddin', 4);

console.log(mohin.showTest());  // output: [ 4, 8, 12, 16, 20 ];

