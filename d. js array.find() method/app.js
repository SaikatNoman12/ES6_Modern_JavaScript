/* === JavaScript array.find() method === */


// use find() method. and use normal function:---------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.find(function (currentElement) {
    return currentElement > 7;
});


console.log(result);  // output: 8 ;


// use find() method. and use arrow function:--------- 
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result2 = numbers2.find((element) => {
    return element > 4;
});

console.log(result2);  // output: 5;


// use find() method and use callback function three parameter:--------- 
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result3 = numbers3.find(function (element, index, array) {

    const ele = element;
    const indexNum = index;
    const arr = array;

    console.log(ele, indexNum);
    console.log(arr);

});

console.log(result3);


// use array.find() second parameter this. Use normal function:---------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        return [1, 2, 3, 4, 5, 6, 7, 50, 60, 70];
    }
    showResult() {
        return this.test().find(function (ele) {
            return ele > this.age;
        }, this);
    }
};
const siful = new Person('Siful', '40');

console.log(siful.showResult());  // output: 50;


// use array.find() second parameter this. Use arrow function. do not use this keyword:--------- 
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 40, 103, 30];
    }
    showTestResult() {
        return this.test().find((ele) => {
            return ele > this.age;
        });
    }
};
const mohin = new Person2('Mohin Uddin', 50);

console.log(mohin.showTestResult()); // output: 103;  

