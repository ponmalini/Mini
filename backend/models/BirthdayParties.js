const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true}
});


userSchema.pre('save', async function (next) {
    next();
});

module.exports = mongoose.model('BirthdayParties', userSchema); 
