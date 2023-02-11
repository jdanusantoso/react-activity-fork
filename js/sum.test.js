const sum = require('./sum')

test('properly adds two numbers', () => {
    expect(sum(1,2)).toBe(3)
})

test('properly adds two numbers', () => {
    expect(sum(3,9)).toBe(12)
})