const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    likedby: {
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

module.exports = mongoose.model('Like', likeSchema);