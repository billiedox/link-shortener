import mongoose from 'mongoose';

const UrlSchema = mongoose.Schema({
    org: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
});


const url = mongoose.model('url', UrlSchema);

export default url;