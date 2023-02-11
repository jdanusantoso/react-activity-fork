const divide = require('./divide')

test('properly divide two numbers', () => {
    expect(divide(4, 1)).toBe(4)
})

test('properly divide two numbers', () => {
    expect(divide(9, 3)).toBe(3)
})

test('properly divide two numbers', () => {
    expect(divide(9, 15)).toBe(0.6)
})


test('properly multiply two numbers', () => {
    expect(divide(-9, 10)).toBe(-0.9)
})

test('properly multiply two numbers', () => {
    expect(divide(-10, -5)).toBe(2)
})


test('properly multiply two numbers', () => {
    expect(divide(-5, -6)).toBe(0.8333333333333334)
})

