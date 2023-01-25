const stringLength = require('./stringLength');

test('return length of string e.g "Henry" returns 5',()=>{
    expect(stringLength('Henry')).toBe(5);
})