const divideRounding = require('./divideRounding')

test('properly divide two numbers', () => {
    expect(divideRounding(4, 6)).toBe(0.67)
})

test('properly divide two numbers', () => {
    expect(divideRounding(9, 20)).toBe(0.45)
})

test('properly divide two numbers', () => {
    expect(divideRounding(9, 15)).toBe(0.600)
})


test('properly divideRounding two numbers', () => {
    expect(divideRounding(-9, 11)).toBe(-0.82)
})

test('properly divide two numbers', () => {
    expect(divideRounding(-10, -1000)).toBe(0.01)
})


test('properly divide two numbers', () => {
    expect(divideRounding(-5, -6)).toBe(0.83)
})

