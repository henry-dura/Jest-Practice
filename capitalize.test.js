const capitalize = require('./capitalize');

test('capitalize first letter: "great" should return "Great"',()=>{
    expect(capitalize('great')).toBe('Great');
}) 