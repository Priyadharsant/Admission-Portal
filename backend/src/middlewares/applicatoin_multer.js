const multer = require("multer");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../config/s3");
const path = require("path");
const AppError = require("../utils/AppError");

const bucketName = process.env.AWS_BUCKET_NAME;


// ==============================
// MULTER CONFIG
// ==============================

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 10
  },

  fileFilter: (req, file, cb) => {

    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new AppError("Only PDF files are allowed", 400), false);
    }

  }

}).any();


// ==============================
// DEEP SETTER
// ==============================

const setDeepValue = (obj, pathString, value) => {

  const keys = pathString.split(".");
  let temp = obj;

  keys.forEach((key, index) => {

    if (index === keys.length - 1) {
      temp[key] = value;
    } else {

      if (!temp[key]) temp[key] = {};

      temp = temp[key];

    }

  });

};


// ==============================
// MAIN MIDDLEWARE
// ==============================

const applicationDocumentUpload = (req, res, next) => {

  upload(req, res, async (err) => {

    if (err) {
      return next(err);
    }

    try {

      if (!req.body?.data) {
        return next(new AppError("Missing data payload", 400));
      }

      let parsedData;

      try {
        parsedData = JSON.parse(req.body.data);
      }
      catch {
        return next(new AppError("Invalid JSON data", 400));
      }


      const applicationNo = parsedData.application_no;

      if (!applicationNo) {
        return next(new AppError("application_no required", 400));
      }


      // Ensure meta_data exists
      if (!parsedData.meta_data) {
        parsedData.meta_data = {};
      }

      // Ensure documents_details exists
      if (!parsedData.meta_data.documents_details) {
        parsedData.meta_data.documents_details = {};
      }


      // ========================
      // FILE UPLOAD LOOP
      // ========================

      if (req.files && req.files.length > 0) {

        for (const file of req.files) {

          // document key from fieldname
          const docKey = file.fieldname.split(".").pop();

          // normalize name
          const safeName = docKey
            .replace(/[^a-zA-Z0-9_-]/g, "_")
            .toLowerCase();

          const year = applicationNo.split("-")[1];

          const fileKey =
            `uploads/${year}/${applicationNo}/${safeName}.pdf`;


          await s3.send(
            new PutObjectCommand({
              Bucket: bucketName,
              Key: fileKey,
              Body: file.buffer,
              ContentType: "application/pdf"
            })
          );


          const fileUrl = `/${fileKey}`;


          // Save inside meta_data.documents_details
          setDeepValue(
            parsedData.meta_data,
            `documents_details.${safeName}`,
            fileUrl
          );

        }

      }

      req.processedData = parsedData;

      next();

    }
    catch (error) {

      return next(
        new AppError("File upload failed", 500)
      );

    }

  });

};

module.exports = applicationDocumentUpload;