const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = new mongoose.model('user', userSchema) 