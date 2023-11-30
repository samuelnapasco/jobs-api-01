const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        require: [true, 'please provide company'],
        maxlength: 50
    },
    position: {
        type: String,
        require: [true, 'please provide postion'],
        maxlength: 100
    },
    status: {
        type: String,
        enum:['interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user'],
    }
},{timestamps: true})

module.exports = mongoose.model('Job', JobSchema)