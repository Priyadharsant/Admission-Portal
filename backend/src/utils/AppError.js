class AppError extends Error {
    constructor(message, statusCode) {
        let isJson = false;
        if (typeof message === "object") {
            message = JSON.stringify(message);
            isJson = true;
        }

        super(message);

        this.statusCode = statusCode;
        this.isOperational = true;
        this.isJson = isJson;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;