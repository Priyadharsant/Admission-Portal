const { getDB } = require("../config/db");
const bcrypt = require("bcrypt");


/* =========================
   REGISTER STUDENT
========================= */

async function registerStudent(req, res) {

  try {

    const db = getDB();

    const { name, email, mobile, city, state, course, password } = req.body;

    // Check missing fields
    if (!name || !email || !mobile || !city || !state || !course || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // Check duplicate email
    const existingUser = await db.collection("students").findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const studentData = {
      name,
      email,
      mobile,
      city,
      state,
      course,
      password: hashedPassword,
      createdAt: new Date()
    };

    const result = await db.collection("students").insertOne(studentData);

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      id: result.insertedId
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

}


/* =========================
   LOGIN STUDENT
========================= */

async function loginStudent(req, res) {

  try {

    const db = getDB();

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    // Find user
    const student = await db.collection("students").findOne({ email });

    if (!student || !student.password) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    // Login success
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: student._id,
        name: student.name,
        email: student.email
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

}

module.exports = { registerStudent, loginStudent };