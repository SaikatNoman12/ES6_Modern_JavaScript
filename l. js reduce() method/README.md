# JavaScript array reduce() method

### How to use array reduce() method:

#### Input:

    const array = [ 1, 2, 3, 4, 5, 6, 7 ];

    const result = array.reduce((prevValue, currentValue, currentValueIndex, array) => {

        return prevValue + currentValue;

    });

    console.log(result);

#### Output:

    28



