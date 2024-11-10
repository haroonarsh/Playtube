import mongoose, { Schema } from "mongoose";

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, 
    {
    timestamps: true
    }
)


export const Playlist = new mongoose.model("Playlist", playlistSchema)