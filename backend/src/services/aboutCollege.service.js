const { getCollegeCollection } = require("../config/db.config");


async function getCollegeDataService() {
  const collection = await getCollegeCollection();
  const data = await collection.findOne({});
  return data;
}



module.exports = {getCollegeDataService};