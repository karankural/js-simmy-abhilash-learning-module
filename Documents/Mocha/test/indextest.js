const assert = require('chai').assert;
const index = require('./index.js');
describe('index.js', () => {
    it('Adding two numbers', () =>{
        const result = index.addNumbers(5,10);
        assert.equal(result,15);
        console.log(result);
    });
    it('Adding two no. result type', () =>{
        const result = index.addNumbers(8,9);
        assert.typeOf(result, 'number');
        console.log(result);
    });
    it('Subtraction two numbers', () =>{
        const result = index.subtractNumbers(86,34);
        assert.equal(result,52);
        console.log(result);
    });
    it('Multiplication three no.', () =>{
        const result = index.multiplicationNumbers(9,8,7);
        assert.equal(result,504)
        console.log(result);
    });
    
})

