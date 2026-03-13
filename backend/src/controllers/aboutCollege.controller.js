const {getCollegeDataService} = require("../services/aboutCollege.service")
async function getCollegeData(req, res) {
  try {
    const data = await getCollegeDataService();

    if (!data) {
      return res.status(404).json({
        message: "College data not found"
      });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching college data:", error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

module.exports = {
  getCollegeData
};