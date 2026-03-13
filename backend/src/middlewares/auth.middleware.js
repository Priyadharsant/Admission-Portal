const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

function Auth(req, res, next) {


  const token = req.cookies.token;


  if (!token) {
    return next(new AppError("Access denied.", 401));
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {

    return next(new AppError("Invalid or expired token", 401));

  }
}

module.exports = Auth;