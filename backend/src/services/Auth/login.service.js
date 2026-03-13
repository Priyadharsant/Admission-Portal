const { getApplicationsCollection, getLeadsCredentialCollection } = require("../../config/db.config");
const { generateApplicationNo } = require("../../helper/application_no.helper");
const { generatePassword } = require("../../helper/generatePassword.helper");
const hashPassword = require("../../helper/hashpassword.helper");
const AppError = require("../../utils/AppError");
const bcrypt = require("bcrypt");

/* =========================
   REGISTER STUDENT SERVICE
========================= */

async function registerStudent(data) {

    const collection = await getApplicationsCollection();
    const credentialCollection = await getLeadsCredentialCollection();

    const name = data.name;
    const email = data?.personal_details?.email;
    const phone_no = data?.personal_details?.phone_no;
    const city = data?.address_details?.city;
    const state = data?.address_details?.state;
    const course = data?.program_details?.course_prefrence_1;
    const password = generatePassword();

    if (!name || !email || !phone_no || !city || !state || !course || !password) {
        throw new AppError("All fields are required", 400);
    }

    // check duplicate email
    const existingUser = await credentialCollection.findOne({ email });

    if (existingUser) {
        throw new AppError("Email already registered", 400);
    }

    // generate application number
    const application_no = await generateApplicationNo();

    // hash password
    const hashedPassword = await hashPassword(password);

    // store credentials
    const credentialResult = await credentialCollection.insertOne({
        name,
        email,
        phone_no,
        password: hashedPassword,
        application_no,
        created_at: new Date()
    });

    // store application data
    await collection.insertOne({
        application_no,
        data,
        status: "draft",
        created_at: new Date()
    });

    return {
        success: true,
        message: "Student registered successfully",
        application_no,
        user_id: credentialResult.insertedId
    };
}


/* =========================
   LOGIN STUDENT SERVICE
========================= */

async function loginStudent(data) {

    const { email, password } = data;

    if (!email || !password) {
        throw new AppError("Email and password are required", 400);
    }
    const credentialCollection = await getLeadsCredentialCollection();

    const student = await credentialCollection.findOne({ email });

    if (!student) {
        throw new AppError("User not found", 404);
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
        throw new AppError("Invalid password", 401);
    }

    return {
        success: true,
        message: "Login successful",
        user: {
            id: student._id,
            name: student.name,
            email: student.email,
            application_no: student.application_no
        }
    };
}


module.exports = {
    registerStudent,
    loginStudent
};