const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        data: Buffer,
        contentType: String
    },
    role: {
        type: String,
        default: 'user'
    }
}, {timestamps: true})

module.exports = mongoose.model('user', UserSchema)