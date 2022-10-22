# JavaScript Rest operator

### JavaScript arguments:

#### Input

    function myFirstFunc(num1, num2) {

    console.log(num1, num2);
    
    console.log(arguments);

    }

    myFirstFunc(10, 20, 30, 40, 50, 60);


#### Output

    10 20
    [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60 }


### JavaScript rest operator:

#### Input:

    function muSecondFunc(num1, num2, ...numbers) {

    console.log(num1, num2);

    console.log(numbers);
    
    }

    muSecondFunc(100, 200, 300, 400, 500, 600);


#### Output:
    
    100 200
    [ 300, 400, 500, 600 ]
