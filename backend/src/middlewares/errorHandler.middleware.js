const path = require("path");

const errorHandler = (err, req, res, next) => {

  let file = "unknown";
  let line = "unknown";

  if (err.stack) {
    const stackLine = err.stack.split("\n")[1];
    const match = stackLine.match(/(.*):(\d+):(\d+)/);

    if (match) {
      file = path.basename(match[1]);
      line = match[2];
    }
  }

  // default status
  let statusCode = err.statusCode || 500;

  let message = err.message || "Internal Server Error";
  console.log("┌──────────────────── ERROR ────────────────────┐");
  console.log("│ERROR : ", message);
  console.log("│FILE  : ", file);
  console.log("│LINE  : ", line);
  console.log("│PATH  : ", path.join(process.cwd(), file || ""));
  console.log("│API   : ", req.method, req.originalUrl);
  console.log("└───────────────────────────────────────────────┘");


  if (err?.isJson) {
    return res.status(statusCode).json(JSON.parse(message));
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;