const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
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
    number: {
        type: Number
    },
    cardDetails: {
        cardType: {
            type: String,
            required: true
        },
        cardNumber: {
            type: Number,
            required: true
        },
        cardName: {
            type: String,
            required: true
        },
        exDate: {
            type: Date,
            required: true
        },
        cvv: {
            type: Number,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);