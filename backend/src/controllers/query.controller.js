const queryService = require("../services/query.service");

exports.createQuery = async (req, res, next) => {

  try {

    const result = await queryService.createQuery(req.body);

    res.status(201).json({
      success: true,
      data: result
    });

  } catch (err) {
    next(err);
  }

};