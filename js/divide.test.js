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
    expect(multiply(-9, 10)).toBe(-0.9)
})

test('properly multiply two numbers', () => {
    expect(multiply(-10, -5)).toBe(2)
})

/*
test('properly multiply two numbers', () => {
    expect(multiply(-5, -10)).toBe(50)
})

*/