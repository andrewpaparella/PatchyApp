const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema (
    {
        Date: {
            type: Date,
            default: Date.now()
        },
        body: {
            type: String,
            required: true
        },
        profileId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String
    },
    {
        timestamps: true
    }
)

const patchNoteSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        Date: {
            type: Date,
            default: Date.now()
        },
        body: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    }
)


module.exports = mongoose.model('PatchNote', patchNoteSchema)