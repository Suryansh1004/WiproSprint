const fetch = require('node-fetch');

const sayHello = (username) => {
    return `Hello ${username}`;
}

const Factorial = (number) => {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

const getPerson = () => {
    let person = {
        fname: 'Peter',
        lname: 'Parker',
        age: 26
    }
    return person;
}

const GetUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())

}

module.exports = { sayHello, Factorial, getPerson, GetUsers };