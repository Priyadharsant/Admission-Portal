const { getDB } = require("../config/db");

exports.getStats = async (req, res, next) => {

  try {

    const db = getDB();

    const totalLeads = await db.collection("leads").countDocuments();

    const queries = await db.collection("queries").countDocuments();

    const applications = await db.collection("applications").countDocuments();

    const tickets = await db.collection("tickets").countDocuments();

    res.json({
      totalLeads,
      queries,
      applications,
      tickets
    });

  } catch (err) {

    next(err);

  }

};