import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

        // define schema
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    video: {
        type: Schema.Types.ObjectId,    // one who is commenting
        ref: "Video"
    },
    owner: {
        type: Schema.Types.ObjectId,    // one who is commenting
        ref: "User"
    }
},
{
    timestamps: true
}
)


export const Comment = mongoose.model("Comment", commentSchema);