const { getLeadDb } = require("../config/db.config");
const AppError = require("../utils/AppError");
async function generateApplicationNo() {
    const db = await getLeadDb();
    const collection = db.collection("applications");

    const count = await collection.countDocuments();

    const nextNumber = count + 1;

    const year = new Date().getFullYear();

    const applicationNo = `VEC-${year}-${nextNumber}`;

    return applicationNo;
}

module.exports = { generateApplicationNo };