const {capitalize,reverseString,calculator,caesarCipher,analyzeArray}=require('./index')

test('first letter capitalized', () => {
    expect(capitalize('string')).toBe('String');
  });

  test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh'); 
  });

  test('calculator', () => {
  
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(8,5)).toBe(3);
    expect(calculator.multiply(4,2)).toBe(8);
    expect(calculator.divide(10,5)).toBe(2)
  });


test("Caesar Cipher ", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test('analyse array',()=>{
  expect(analyzeArray([3,9,1,7])).toEqual({
    average:5,
    min:1,
    max:9,
    length:4
  })
})