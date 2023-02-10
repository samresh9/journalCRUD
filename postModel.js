const { mongoose, Schema } = require("mongoose");

const postSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    postData : {
        type: String,
        required: true
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;