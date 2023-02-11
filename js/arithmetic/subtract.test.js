const subtract = require('./subtract')

test('properly subtract two numbers', () => {
    expect(subtract(4, 1)).toBe(3)
})

test('properly subtract two numbers', () => {
    expect(subtract(9, 3)).toBe(6)
})

test('properly subtract two numbers', () => {
    expect(subtract(9, 15)).toBe(-6)
})