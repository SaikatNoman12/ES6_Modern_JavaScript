/* ==== JavaScript rest operator ==== */


// Use arguments:---------
function myFirstFunc(num1, num2) {

    console.log(num1, num2);  // 10 20
    
    console.log(arguments);   // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60 }

}

myFirstFunc(10, 20, 30, 40, 50, 60);
/* Output:
10 20
[Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60 }
*/


// Use rest operator:---------
function muSecondFunc(num1, num2, ...numbers) {

    console.log(num1, num2); // 100 200

    console.log(numbers);  // [ 300, 400, 500, 600 ]
    
}

muSecondFunc(100, 200, 300, 400, 500, 600);
/* Output:
100 200
[ 300, 400, 500, 600 ]
*/