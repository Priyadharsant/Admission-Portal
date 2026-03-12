const { getDB } = require("../config/db");

exports.createQuery = async (data) => {

  const db = getDB();

  const query = {
    ...data,
    createdAt: new Date()
  };

  return db.collection("queries").insertOne(query);
};