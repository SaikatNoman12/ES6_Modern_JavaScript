/* === JavaScript Array findIndex() method === */


// use array findIndex(). use normal function:--------- 
const numbers = [1, 3, 5, 5, 6, 7, 8];

const result = numbers.findIndex(function (ele) {
    return !(ele % 2);
});
console.log(result);  // output: 4 , this is index.



// use findIndex(). use normal function:---------
const myResult = numbers.findIndex(function (ele) {
    return ele % 2 === 0;
});
console.log(myResult);  // output: 4, this is index.



// use findIndex() method callback function three parameter:---------
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const arrRes = arr.findIndex(function(element, index, array){
    
    console.log(element, index);
    console.log(array);

    return element >= 6; 

});
console.log(arrRes);  // return element, index and full array. and return 5 , this is index;




// use array findIndex(). use arrow function:---------
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55];

const result2 = numbers2.findIndex((element) => {
    return element >= 33;
});
console.log(result2);  //  output: 12 , this is index.



// use array findIndex(). use second parameter this keyword. Use normal function:--------- 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    test() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 40];
    }

    showResult() {
        return this.test().findIndex(function (element) {
            return element >= this.age;
        }, this);
    }
}
const saiful = new Person('Siful Emon', 32);

console.log(saiful.showResult());  // output: 9, this is index.



// use array findIndex() method. Use arrow function. and use this keyword.
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    test() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    showResult() {
        return this.test().findIndex((element) => {
            return element >= this.age;
        });
    }
}
const shamim = new Person2('Shamim Hossen', 9);

console.log(shamim.showResult());  // output: 8, this is index.




