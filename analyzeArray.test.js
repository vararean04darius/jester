const analyzeArray = require('./analyzeArray')

test('check if function returns an object', () => {
    expect(typeof analyzeArray()).toBe('object');
})

test('check if all properties are right', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
})

test('check if object has 4 properties', () => {
    expect(Object.keys(analyzeArray([1,8,3,4,2,6])).length).toBe(4);
})