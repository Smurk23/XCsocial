const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (date) {
                return dayjs(date).format('DD/MM/YYYY')
            }
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => {
                return new Types.ObjectId()
            }
    
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
