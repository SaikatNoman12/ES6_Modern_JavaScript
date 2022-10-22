# JavaSCript spread operator

### Spread operator use array:

    const num = [1, 2, 3, 4];

    const nums = [...num];

    console.log(nums)  // output: [1, 2, 3, 4]


### Spread operator use object:

#### Input

    const obj1 = {
    name: 'Siful Emon',
    age: 30
    }

    const obj2 = {
        job: 'Developer',
        work: 'Full Time'
    }

    const newObj = {
        ...obj1,
        ...obj2
    };

    console.log(newObj);

#### Output

    { 
        name: 'Siful Emon', 
        age: 30, 
        job: 'Developer', 
        work: 'Full Time' 
    }
