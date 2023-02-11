const divideByZero = require('./divideByZero')
const divideByZero1 = require('./divideByZero')

test('properly divide two numbers by 0', () => {
    expect(divideByZero(4, 0)).toBe(null)
})

  test('properly divide two numbers', () => {
      expect(divideByZero1(0, 20)).toBe(0)
  })

  test('properly divide two numbers', () => {
    expect(divideByZero1(20, 0)).toBe(null)
})

test('properly divide two numbers', () => {
    expect(divideByZero1(9, 20)).toBe(0.45)
 })


 test('properly divide two numbers', () => {
     expect(divideByZero1(-9, 11)).toBe(-0.82)
 })

 test('properly divide two numbers', () => {
     expect(divideByZero1(-10, -1000)).toBe(0.01)
 })


 test('properly divide two numbers', () => {
     expect(divideByZero1(-5, -6)).toBe(0.83)
 })

