const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
}, {
    timestamps:true
})

module.exports = mongoose.model('Comment', commentSchema);
