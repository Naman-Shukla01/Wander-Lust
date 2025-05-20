class ExpressError extends Error {
    constructor(statusCode, message) {
        super(statusCode, message);
        this.statusCode = statusCode;
        this.message = this.message;
    }
}

module.exports = ExpressError;