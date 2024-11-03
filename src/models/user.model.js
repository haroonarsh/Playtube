import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


        // define schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Name must be atleast 3 characters"],
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be atleast 6 characters"]
    },
    avatar: {
        type: String, // cloudinary url
        required: true
    },
    coverImage: {
        type: String, // cloudinary url
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    refreshToken: {
        type: String
    },
    // role: {
    //     type: String,
    //     enum: ["user", "admin"],
    //     default: "user"
    // }

    },
    {
        timestamps: true
    }
)

      // Pre-save hook to hash the password before saving
      userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) {
            return next(); // Skip if password hasn't changed
        }

        try {
            this.password = await bcrypt.hash(this.password, 10)
            next();
        } catch (error) {
            console.log("Hashing error",error);
            next(error);
        }
      })

      // Method to compare password
      userSchema.methods.comparePassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
      }

      // Method to generate access token
      userSchema.methods.generateAccessToken = function () {
        const payload = {
            _id: this._id,
            name: this.name,
            fullName: this.fullName,
            email: this.email
        }
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ASSESS_TOKEN_EXPIRY });
        return token;
      }

      // Method to generate refresh token
      userSchema.methods.generateRefreshToken = function () {
        const payload = {
            _id: this._id,
        }
        const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SERCRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
        return token;
      }

    // Create the user model
const User = mongoose.model("User", userSchema);

export { User }