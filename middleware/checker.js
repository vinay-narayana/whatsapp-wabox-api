// Middlewares are executed before routes. These are used for authentication and validation of an api call.
const verifyRequest = (req, res, buf) => {
    //verify request here
    next();
};

function abortOnError(err, req, res, next) {
//   console.log('error', err);
    if (err) {
        // eslint-disable-next-line no-console
        console.log(err, code);
        res.status(400).send({ error: "Invalid signature." });
    } else {
        next();
    }
}

module.exports = {
verifyRequest,
abortOnError
};
