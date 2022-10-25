const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    message: {
        type: String,
    },
    hashtag: {
        type: String,
    }
},{
    timestamps: true
})

module.exports = new mongoose.model('Post', postSchema) 