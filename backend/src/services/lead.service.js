const { getDB } = require("../config/db");

exports.createLead = async (data) => {
  const db = getDB();

  const lead = {
    ...data,
    stage: "New Lead",
    createdAt: new Date()
  };

  return db.collection("leads").insertOne(lead);
};

exports.getLeads = async () => {
  const db = getDB();

  return db.collection("leads").find().toArray();
};

exports.updateLeadStage = async (id, stage) => {
  const db = getDB();

  return db.collection("leads").updateOne(
    { _id: require("mongodb").ObjectId.createFromHexString(id) },
    { $set: { stage } }
  );
};