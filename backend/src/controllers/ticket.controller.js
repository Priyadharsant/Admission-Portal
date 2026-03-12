const ticketService = require("../services/ticket.service");

exports.createTicket = async (req, res, next) => {
  try {
    const result = await ticketService.createTicket(req.body);

    res.status(201).json({
      success: true,
      data: result
    });

  } catch (err) {
    next(err);
  }
};

exports.getTickets = async (req, res, next) => {
  try {
    const result = await ticketService.getTickets();

    res.json({
      success: true,
      data: result
    });

  } catch (err) {
    next(err);
  }
};