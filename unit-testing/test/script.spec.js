const { Assertion } = require('chai');
const app = require('../script');
const assert = require('chai').assert;
const expect = require('chai').expect;
const hello = require('../script');
const factorial = require('../script');
const person = require('../script');
const users = require('../script');


// Here you need to write the test cases using assert
describe('General Test Cases', () => {
    //This test case should call sayhello() function and check and check the expected string
    it('Should return hello', (sayHello) => {
        assert.equal(sayHello(),hello);
        sayHello();
    
        
    });
    //This test case should class factorial function and check the expected result (factorial of a number)
    it('Should return factorial of a number', (Factorial) => {
        assert.deepStrictEqual(Factorial(),fact);
        Factorial()

    });
    //This test case should call factorial() funtion and check the type of returned value to be a number
    it('Factorial() Should return number', (Factorial) => {
        assert.equal(typeof Factorial,'function')
        Factorial()
    });
});

// Here you need to write the test cases using expect
describe('New Test Suite', () => {
    // This test case should call getPerson() function and check the age property in person object
    it('Person should have age property', (getPerson) => {
        expect(getPerson()).to.have.property('age');
        getPerson();
        
    });

    // This test case should call GetUsers() function and check the name property in person object
    it('User should have name property', (GetUsers) => {
        expect(GetUsers()).to.have.property('name');
        GetUsers();
        

        
    });
});
