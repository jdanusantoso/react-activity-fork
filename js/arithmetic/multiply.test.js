const multiply = require('./multiply')

test('properly multiply two numbers', () => {
    expect(multiply(4, 1)).toBe(4)
})

test('properly multiply two numbers', () => {
    expect(multiply(9, 3)).toBe(27)
})

test('properly multiply two numbers', () => {
    expect(multiply(9, 15)).toBe(135)
})

test('properly multiply two numbers', () => {
    expect(multiply(-9, 10)).toBe(-90)
})

test('properly multiply two numbers', () => {
    expect(multiply(-5, -10)).toBe(+50)
})

test('properly multiply two numbers', () => {
    expect(multiply(-5, -10)).toBe(50)
})