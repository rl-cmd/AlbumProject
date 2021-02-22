const mongoose = require('mongoose')
const ImageSchema = mongoose.Schema({
    albumId: {
        type: Number,
        require: true
    },
    id: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    thumbnailUrl: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users', require: true
    }

})
module.exports = mongoose.model('images', ImageSchema)
