const calculator = require('./calculator');

describe('Check the calculator functions of add,subtract and multiply',()=>{
    test('add 4  plus 5 should be 9',()=>{
        expect(calculator.add(4,5)).toBe(9);
    });

    test('6 minus 2 should be 4',()=>{
        expect(calculator.subtract(6,2)).toBe(4);
    });

    test('2 minus 9 should be -7',()=>{
        expect(calculator.subtract(2,9)).toBe(-7);
    });

    test('4 multiplied by  5 should be 20',()=>{
        expect(calculator.multiply(4,5)).toBe(20);
    })
})