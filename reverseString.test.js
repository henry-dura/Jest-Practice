const reverseString = require('./reverseString');

test('string "Jest" should return "tseJ"',()=>{
    expect(reverseString('Jest')).toBe('tseJ');
});