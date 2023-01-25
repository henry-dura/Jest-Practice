const calculator = require('./calculator');

describe('Check the calculator functions of add,subtract and multiply',()=>{
    test('add 4  plus 5 should be 9',()=>{
        expect(calculator.add(4,5)).toBe(9);
    })
})