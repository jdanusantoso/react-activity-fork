const cloneArray = require('./cloneArray')

test('properly clones array', () => {
    const array = [1, 2, 3]
    //to equal compares the array values
    expect(cloneArray(array)).toEqual(array)
})