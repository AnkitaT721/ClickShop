const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookies.etoken;

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    //console.log(decodedData);

    req.user = await User.findById(decodedData.id);

    next();
});


exports.authorizeRoles = (...roles) => {

    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {  // The includes() method returns true if matched. Otherwise it returns false. The includes() method is case sensitive.
            return next (new ErrorHandler(
                `Role: ${req.user.role} is not allowed to access this resource`,
                403)
            );
        }

        next();
    };
};