import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// define schema
const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            required: [true, "Video is required"],
        },
        tumbnail: {
            type: String, // cloudinary url
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        uploadBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {
        timestamps: true // add createdAt and updatedAt
    }
);

        //Method to add like
videoSchema.methods.addlike = async function () {
    this.likes += 1
    return await this.save();
}

        // Method to add dislike
videoSchema.methods.addDislike = async function () {
    if (this.likes > 0) {
        this.likes -= 1
    }
    return await this.save();
}

        // Method to add view
videoSchema.methods.addView = async function () {
    this.views += 1
    return await this.save();
}

videoSchema.plugin(mongooseAggregatePaginate);

const Video = mongoose.model("Video", videoSchema);



export { Video }