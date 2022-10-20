/* ==== JavaScript array reduce() method ==== */


// use array reduce() method. and use normal function:---------
const array = [1, 2, 3, 4, 5, 6, 7];

const result = array.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
}, 0);

console.log(result);  // output: 28;


// use array reduce() method. and use arrow function :---------
const array2 = [1, 2, 3, 4, 6, 6];

const result2 = array2.reduce((prevValue, currentValue) => {

    if (currentValue > 4) {
        prevValue += currentValue;
    }

    return prevValue;

}, 0);

console.log(result2);  // output: 12;


// use array reduce() method and callback function use 4 parameter:---------
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result3 = array3.reduce((prevValue, currentValue, currentIndex, array) => {
    return prevValue + currentValue + currentIndex;
}, 0);

console.log(result3);  // output: 81


// use array reduce() method and this keyword:--------- 
class Person {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    test() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
    }

    showTest() {

        return this.test().reduce((prevValue, currentValue) => {

            if (currentValue >= this.number) {

                prevValue += currentValue;

            }

            return prevValue;

        }, 0);

    }
}

const siful = new Person('Siful Emon', 4);

console.log(siful.showTest());  // output: 50




