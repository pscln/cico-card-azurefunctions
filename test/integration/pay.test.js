const httpFunction = require('../../src/pay/index')
const context = require('../context')

/**
 * test of the dummy pay endpoint / azure function
 */
describe('HTTP triggered pay endpoint / azure function', () => {

    /**
     * test with correct request that should return status 200
     */
    it('should return the sum of parameter and 2 with status 200', async () => {
        const result = 2 + 2;
        const request = {
            query: {amount: 2}
        };

        await httpFunction(context, request);

        expect(context.res.body).toEqual({success: true, result: result});
        expect(context.res.status).toEqual(200);
    })
});