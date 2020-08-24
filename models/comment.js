const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentname: {
        type: String,
    },
    postedby: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    blackliveid: {
        type: String,
    }
}, {
    timestamps:true
})

module.exports = mongoose.model('Comment', commentSchema);
