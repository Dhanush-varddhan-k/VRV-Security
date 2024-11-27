
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                if (value === 'admin@gmail.com') {
                    return this.isNew || this.email === value;
                }
                return true;
            },
            message: 'Root admin email is reserved and cannot be duplicated',
        },
    },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
});

// Prevent root admin from being updated or deleted
userSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update.email === 'admin@gmail.com') {
        throw new Error('Root admin cannot be updated');
    }
    next();
});

userSchema.pre('findOneAndDelete', function (next) {
    const query = this.getQuery();
    if (query.email === 'admin@gmail.com') {
        throw new Error('Root admin cannot be deleted');
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
