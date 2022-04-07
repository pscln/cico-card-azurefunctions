const httpFunction = require('../../src/add/index')
const context = require('../context')

/**
 * test of the add endpoint / azure function
 */
describe('HTTP triggered add endpoint / azure function', () => {

    /**
     * test with correct request that should return status 200
     */
    it('should return the sum of parameter and 2 with status 200', async () => {
        const result = 4;
        const request = {
            query: {amount: 2}
        };

        await httpFunction(context, request);

        expect(context.res.body).toEqual({success: true, result: result});
        expect(context.res.status).toEqual(200);
    })

    it('should fail when the given parameter is not positve', async () => {
        const request = {
            query: {amount: -1}
        };

        await httpFunction(context, request);

        expect(context.res.body).toEqual({success: false, error: 'Illegal amount type! Please provide a positive number!'});
        expect(context.res.status).toEqual(400);
    })
});