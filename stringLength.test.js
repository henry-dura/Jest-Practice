const stringLength = require('./stringLength');

test('return length of string e.g "Henry" returns 5',()=>{
    expect(stringLength('Henry')).toBe(5);
});

test('returns the string must be at least 1 character long and not longer than 10 characters',()=>{
    expect(stringLength('')).toBe('the string must be at least 1 character long and not longer than 10 characters');
});

test('returns the string must be at least 1 character long and not longer than 10 characters',()=>{
    expect(stringLength('HenryJestPractice')).toBe('the string must be at least 1 character long and not longer than 10 characters');
});