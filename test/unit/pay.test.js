const index = require('../../src/pay/index');

/**
 * unit test for pay function
 */
describe('pay function', () => {
    it('calculates sum of parameter and 2', () => {
        const expectResult = 4;
        var result = index.pay(2);

        expect(result).toBe(expectResult);
    })
})