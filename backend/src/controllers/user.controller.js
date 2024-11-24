import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import { Video } from "../models/video.model.js"

        // code to generate access token and refresh token for user
        // and save refresh token in db
const generateAccessTokenAndRefreshToken = async (userId) => {
            try {
                const user = await User.findById(userId);
                if (!user) {
                    throw new ApiError(404, "User not found");
                }
        
                const accessToken = user.generateAccessToken();
                const refreshToken = user.generateRefreshToken();
        
                user.refreshToken = refreshToken;
                await user.save({ validateBeforeSave: false });
        
                return { accessToken, refreshToken };
            } catch (error) {
                console.error("Error generating tokens:", error);
                throw new ApiError(500, "Something went wrong while generating access token and refresh token");
            }
};
        

        // register user
const registerUser = asyncHandler(async (req, res) => {
    // get user detail from frontend
    // validation - not empty or empty
    // check if user already exists: username, email
    // check for images, avatar
    // upload then to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const {username, email, fullName, password} = req.body;
    console.log("email: ", email);

            // validation
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

            // check if user already exists
    const existerUser = await User.findOne({
        $or: [{ email }, { password }]
    })
    if (existerUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

    console.log(req.files);
    
            // check for images, avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required");
    }

            // upload then to cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if (!avatar) {
        throw new ApiError(400, "Failed to upload avatar");
    }

            // create user object - create entry in db
    const user = await User.create({
        fullName,
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        username: username.toLowerCase()
    })

            // remove password and refresh token field from response
    const createUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createUser) {
        throw new ApiError(500, "Somethis went wrong while registering user")
    }

            // return res
    return res
    .status(200)
    .json(
        new ApiResponse(201, createUser, "User created successfully")
    )

})

// const register = asyncHandler(async (req, res) => {


//     // get user detail from frontend
//     // validation - not empty or empty
//     // check if user already exists: username, email
//     // check for images, avatar
//     // upload then to cloudinary, avatar
//     // create user object - create entry in db
//     // remove password and refresh token field from response
//     // check for user creation
//     // return res

//     const {username, email, fullName, password} = req.body;

//     // validation - not empty or empty
//     if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
//         throw new ApiError(400, "All fields are required");
//     }

//     if (!username || !email || !fullName || !password) {
//         throw new ApiError(400, "All fields are required");
        
//     }

//     // check if user already exists
//     const existUser = await User.findOne({
//         $or: [{ email }, {username}]
//     })

//     if (existUser) {
//         throw new ApiError(409, "User with email or username already exists");
//     }

//     const user = await User.create({
//         fullName,
//         email,
//         password,
//         username: username.toLowerCase()
//     })

//     // remove password and refresh token field from response
//     const createUser = await User.findById(user._id).select(
//         "-passsword -refreshToken"
//     )

//     if (!createUser) {
//         throw new ApiError(500, "Somethis went wrong while registering user")
//     }

//     return res
//     .status(200)
//     .json(new ApiResponse(201, createUser, "User created successfully"))
// })

        // login user

const loginUser = asyncHandler(async (req, res) => {
    // get user detail from frontend
    // username or password
    // validation - not empty or empty
    // check if user already exists: username, email
    // check for user creation  
    // return res

            // user detail
    const {email, username, password} = req.body;

            // validation
    if ([email || username || password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

            // username or password
    if (!email || !password) {
        throw new ApiError(400, "All fields ar required");
    }

            // check if user already exists
    const existerUser = await User.findOne({
        $or: [{ email }, { username }]
    })
    if (!existerUser) {
        throw new ApiError(401, "Invalid email or password");
    }
            // password
    const isPasswordValid = await existerUser.comparePassword(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credintials");
    }

    const { accessToken, refreshToken } =  await generateAccessTokenAndRefreshToken(existerUser._id);
            
    const loggedInUser = await User.findById(existerUser._id).select(
        "-password -refreshToken"
    )

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none"
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, "User logged in successfully"))
    
});

const logoutUser = asyncHandler( async (req, res) => {

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none"
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged our successfully"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decoded = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decoded?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used.");
        }
    
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }
    
        const {accessToken, newRefreshToken} = await generateAccessTokenAndRefreshToken(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, "Access token Refreshed succesfully")
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword} = req.body;
    const userId = req.user?._id;

    if ( !oldPassword || !newPassword) {
        throw new ApiError(400, "Both passwords are required.")
    }

    const user = await User.findById(userId)

    if (!user) {
        throw new ApiError(400, "User not Found")
    }

    const isPasswordCurrect = await user.comparePassword(oldPassword)
    if (!isPasswordCurrect) {
        throw new ApiError(401, "Current password is incorrect");
    }

    // Ensure the new password is different from the current one
    if (oldPassword === newPassword) {
        throw new ApiError(400, "New password must be different from the current password");
    }

    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"))
})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(200, req.user, "current user fetched successfully"))
})

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { fullName, email } = req.body;

    if (!fullName || !email) {
        throw new ApiError(400, "all fields are required.")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                // fullName: fullName
                fullName,
                email
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully."))
})

const updateUserAvatar = asyncHandler( async(req, res) => {
    const avatarLocalPath = req.file.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading on avatar.")
    }

    const updatedAvatar = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url
            }
        },
        {
            new: true
        }
    ).select("-password")

    if (updatedAvatar.avatar) {
        const deleteOldAvatar = await cloudinary.uploader.destroy(req.user?.avatar)

        if (deleteOldAvatar) {
            console.log("old avatar deleted successfully")
        }
    }


    return res
    .status(200)
    .json(new ApiResponse(200, updatedAvatar, "Avatar is uploaded successfully."))
})

const updateUserCoverImage = asyncHandler( async(req, res) => {
    const coverImageLocalPath = req.file?.path;

    if (!coverImageLocalPath) {
        throw new ApiError(400, "Cover Image is missing")
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if (!coverImage.url) {
        throw new ApiError(400, "Error while uploading on cover Image.")
    }

    const updatedCoverImage = await User.findByIdAndUpdate(
        req.user?._id,
        {
            coverImage: coverImage.url
        },
        {
            new: true
        }
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, updatedCoverImage, "Cover Image is updated successfully."))
})

const getUserChannelProfile = asyncHandler(async (req, res) => {
    const {username} = req.params;

    if (!username?.trim()) {
        throw new ApiError(400, "username is missing")
    }

    const channel = await User.aggregate([
        {
            $match: {
                username: username?.toLowerCase()
            }
        },
        {
            $lookup: {
                from: "subscription",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "Subscription",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers"
                },
                channelSubscribedCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: {
                        if: {$in: [req.user?._id, "$subscribers.subscriber"]}
                    }
                }
            }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                subscribersCount: 1,
                channelSubscribedCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1
            }
        }
    ])

    if (!channel?.length) {
        throw new ApiError(404, "Channel does not exist.")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, channel[0], "Channel profile fetched successfully."))
})

const getWatshHistory = asyncHandler(async (req, res) => {
    const userId = req.user?._id;

    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: "videos", // I am not sure thier string is "video" or "videos" if it not work so change it to "video"
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        username: 1,
                                        fullName: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
    .status(200)
    .json(new ApiResponse(200, user[0].watchHistory, "Watch history fetched successfully."))
})

// const uploadVideo = asyncHandler(async (req, res) => {
//     const videoLocalPath = req.file?.path;

//     if (!videoLocalPath) {
//         throw new ApiError(400, "Video is missing")
//     }

//     const video = await uploadOnCloudinary(videoLocalPath)

//     if (!video.url) {
//         throw new ApiError(400, "Error while uploading a video.")
//     }

//     const videoUploaded = await Video.findByIdAndUpdate(
//         req.user?._id,
//         {
//             $push: {
//                 videoFile: video.url
//             }
//         },
//         {
//             new: true
//         }
//     ).select("-password")

//     if (!videoUploaded.videoFile) {
//         throw new ApiError(400, "something wrong while uploading video")
//     }

//     return res
//     .status(200)
//     .json(new ApiResponse(200, videoUploaded, "Video uploaded successfully."))
// })

export {  loginUser, logoutUser, registerUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatshHistory };