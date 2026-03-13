const fetch = require("node-fetch");
const AppError = require("../utils/AppError");
async function verifyCaptchaService(req, res, next) {
    return next();
    const token = req.body?.captchaToken;
    if (!token) {
        return next(new AppError("Token missing!"));
    }
    const secretKey = process.env.CAPTCHA_TOKEN;

    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `secret=${secretKey}&response=${token}`
        }
    );

    const data = await response.json();
    if (!data.success) {
        return next(new AppError("Your not human!"))
    }
    return next();
};

module.exports = { verifyCaptchaService };