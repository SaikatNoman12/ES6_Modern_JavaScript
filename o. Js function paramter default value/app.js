/* ==== JavaScript function parameter default value ==== */



// use function parameter default value:---------
function myFunction(param = 10) {
    console.log(param);
}

myFunction();  // output default parameter value: 10;

myFunction(100);  // output parameter value: 100;

myFunction(undefined)  // output default parameter value: 10;
