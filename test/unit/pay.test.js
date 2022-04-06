const index = require('../../src/add/index');

/**
 * unit test for add function
 */
describe('add function', () => {
    it('calculates sum of parameter and 2', () => {
        const expectResult = 4;
        var result = index.add(2);

        expect(result).toBe(expectResult);
    })
})