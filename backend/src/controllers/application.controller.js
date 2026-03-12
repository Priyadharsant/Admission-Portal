const applicationService = require("../services/application.service");

exports.createApplication = async (req, res, next) => {
  try {
    const result = await applicationService.createApplication(req.body);
    res.status(201).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};

exports.getApplications = async (req, res, next) => {
  try {
    const result = await applicationService.getApplications();
    res.json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};