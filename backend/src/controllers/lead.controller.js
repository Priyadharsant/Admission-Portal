const leadService = require("../services/lead.service");
const response = require("../utils/response");

exports.createLead = async (req, res, next) => {
  try {

    const result = await leadService.createLead(req.body);
    response.created(res, result);
  } catch (err) {
    next(err);
  }
};
exports.getLeads = async (req, res, next) => {
  try {
    const leads = await leadService.getLeads();
    response.success(res, leads);
  } catch (err) {
    next(err);
  }
};
exports.changeStage = async (req, res, next) => {
  try {

    const { id } = req.params;

    const { stage } = req.body;

    const result = await leadService.updateLeadStage(id, stage);

    response.success(res, result);

  } catch (err) {
    next(err);
  }
};