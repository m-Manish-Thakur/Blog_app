const mongoose = require('mongoose');

const apiSchema = mongoose.Schema({
    title:{
        type: String,
        requires: true
    },
    desc:{
        type: String,
        requires: true
    },
    coverImg:{
        type: String
    },
    category:{
        type: String,
        requires: true
    }
})

const PostApi = mongoose.model("PostApi", apiSchema)

module.exports = PostApi;