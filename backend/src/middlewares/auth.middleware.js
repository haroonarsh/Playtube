import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler( async (req, res, next) => {
    try {
           // Retrieve the token from the cookies or headers
    const token = req.cookies?.accessToken || req.headers["authorization"]?.replace("Bearer ", "");

    if (!token) {
        throw new ApiError(401, "Unauthorized request. No token provided.");
    }

            // Verify the token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    console.log("decodedToken", decodedToken);
    const user = await User.findById(decodedToken._id).select("-password");
    if (!user) {
        throw new ApiError(401, "Unauthorized request. user not found.");
    }

         // Attach the user to the request object for later use
    req.user = user;
    next();    // Move to the next middleware or route handler

    } catch (error) {
            // If token verification fails, return an authentication error
        next(new ApiError(401, error.message || "Invalid or expired token. Please log in again."));
    }
    
})
