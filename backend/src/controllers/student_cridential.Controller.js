const AppError = require("../utils/AppError");
const { registerStudent, loginStudent, verifyCaptchaService } = require("../services/Auth/login.service");

const jwt = require("jsonwebtoken")
/* =========================
   SIGNUP CONTROLLER
========================= */

async function signUpStudentController(req, res, next) {

  try {

    const result = await registerStudent(req.body);

    res.status(201).json(result);

  } catch (error) {

    next(error);

  }

}


/* =========================
   LOGIN CONTROLLER
========================= */

async function loginStudentController(req, res, next) {

  try {

    const result = await loginStudent(req.body);
    const token = jwt.sign(
      {
        id: result.user.id,
        email: result.user.email,
        application_no: result.user.application_no
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,       // JS cannot access
      secure: false,        // true in production (HTTPS)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: result.user
    });

  } catch (error) {

    next(error);

  }

}

module.exports = {
  signUpStudentController,
  loginStudentController
};