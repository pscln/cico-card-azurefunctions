/**
 * Azure function for add endpoint
 * 
 * @param {*} context - run context (azure)
 * @param {*} req 
 */
module.exports = async function (context, req) {
    const amount = Number((req.query.amount));

    // amount must be positive
    if(amount <= 0){
        context.res = {
            status: 400,
            body: {success: false, error: "Illegal amount type! Please provide a positive number!"}
        };
    }else{
        var result = amount + 2;
        context.res = {
            status: 200,
            body: {success: true, result: result}
        };
    }
}

/**
 * Dummy function for unit test
 * 
 * @param {*} a
 * @returns sum of a and 2
 */
module.exports.add = function(a){
    return a + 2;
}