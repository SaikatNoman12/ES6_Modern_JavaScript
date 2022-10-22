/* ==== JavaScript Tagged template literals ==== */


// Use tagged template literals:--------- 
const firstPlayer = 'Tamim';
const secondPlayer = 'Sakib';

function modifier(strings, ...values) {

    return strings.reduce((prevValue, currentValue) => {

        return prevValue + currentValue + (values.length ? 'Mr. ' + values.shift() : "");

    }, "");

}

const result = modifier`We have ${firstPlayer} and ${secondPlayer} in our cricket team.`;

console.log(result);   // output: We have Mr. Tamim and Mr. Sakib in our cricket team.

