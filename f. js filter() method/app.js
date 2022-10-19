/* ==== JavaScript array filter() method ==== */


// use filter() method, use normal function:---------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const results = numbers.filter(function (element) {
    return element > 4;
});
console.log(results);  // output: [ 5, 6, 7, 8, 9, 10 ];



// use filter() method, use arrow function:---------
const numbers2 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

const results2 = numbers2.filter((element) => {
    return element >= 5;
});
console.log(results2);  // output: [ 5, 5, 6, 7, 8, 9 ];



// use filter method and use this keyword and use class:---------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    test() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    showResult() {
        return this.test().filter(function (element) {
            return element > this.age;
        }, this);
    }
}

const saiful = new Person('Saiful', 5);

console.log(saiful.showResult());  // output: [ 6, 7, 8, 9 ];



// use filter method and use this keyword, use normal function in filter() method and use class. :---------
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    test() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    }

    showResult2() {
        return this.test().filter((element) => {
            return element >= this.age;
        })
    }
}
const mohin = new Person2('Mohin Uddin', 8);

console.log(mohin.showResult2());  // output: [ 8, 9 ];



// use three parameter in filter callback function:---------   
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const results4 = numbers4.filter(function (element, index, array) {

    console.log(element, index, array);

    return element >= 7;

});
console.log(results4);  // output [ 7, 8, 9 ];