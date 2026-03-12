const { getDB } = require("../config/db");

exports.createTicket = async (data) => {

  const db = getDB();

  const ticket = {
    ...data,
    status: "Open",
    createdAt: new Date()
  };

  return db.collection("tickets").insertOne(ticket);
};

exports.getTickets = async () => {

  const db = getDB();

  return db.collection("tickets").find().toArray();
};