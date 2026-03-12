const { getDB } = require("../config/db");

exports.createApplication = async (data) => {

  const db = getDB();

  const application = {
    ...data,
    status: "Application Started",
    createdAt: new Date()
  };

  return db.collection("applications").insertOne(application);
};

exports.getApplications = async () => {

  const db = getDB();

  return db.collection("applications").find().toArray();
};