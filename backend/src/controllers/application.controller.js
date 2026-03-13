const { applicationService } = require("../services/applications.service");

async function updateApplication(req, res, next) {
    try {


        const { application_no, meta_data } = req.processedData;
        console.log(req.processedData);

        if (!application_no || !meta_data) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing"
            });
        }


        await applicationService({
            application_no,
            meta_data
        });

        res.status(200).json({
            success: true,
            message: "Application updated successfully"
        });

    } catch (error) {
        next(error);
    }
}

module.exports = { updateApplication };