const { getLeadDb } = require("../config/db.config");

function flattenObject(obj, prefix = "") {
  let result = {};

  for (let key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
  }

  return result;
}

async function applicationService(docs) {

  const db = await getLeadDb();
  const collection = db.collection("applications");

  const { application_no, meta_data } = docs;

  const flattened = flattenObject(meta_data);

  const updateData = {};
  for (const key in flattened) {
    updateData[`data.${key}`] = flattened[key];
  }

  await collection.updateOne(
    { application_no },
    { $set: updateData }
  );
}

module.exports = { applicationService };