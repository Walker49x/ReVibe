class ExpressError extends Error {
    constructor(statusCode, mssg) {
        super();
        this.statusCode = statusCode;
        this.mssg = mssg;
    }
}

module.exports = ExpressError;