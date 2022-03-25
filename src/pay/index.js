module.exports = async function (context, req) {
    const amount = (req.query.amount || (req.body && req.body.amount));

    if(amount <= 0){
        context.res = {
            status: 400,
            body: {success: false, error: "Illegal amount type! Please provide positive number"}
        };
    }else{
        context.res = {
            status: 200,
            body: {success: true}
        };
    }
}