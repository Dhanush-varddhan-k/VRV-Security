// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ['admin', 'user'], default: 'user' },
// });

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// module.exports = mongoose.model('User', userSchema);




// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: {
//             validator: function (value) {
//                 // Ensure no duplicate root admin
//                 if (value === 'admin@gmail.com') {
//                     return this.isNew || this.email === value;
//                 }
//                 return true;
//             },
//             message: 'Root admin email is reserved and cannot be duplicated',
//         },
//     },
//     password: { type: String, required: true },
//     role: {
//         type: String,
//         enum: ['admin', 'user'],
//         default: 'user',
//         validate: {
//             validator: function (value) {
//                 return ['user', 'admin'].includes(value);
//             },
//             message: 'Invalid role value',
//         },
//     },
// });

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// // Prevent root admin from being updated or deleted
// userSchema.pre('findOneAndUpdate', function (next) {
//     const update = this.getUpdate();
//     if (update.email === 'admin@gmail.com') {
//         throw new Error('Root admin cannot be updated');
//     }
//     next();
// });

// userSchema.pre('findOneAndDelete', function (next) {
//     const query = this.getQuery();
//     if (query.email === 'admin@gmail.com') {
//         throw new Error('Root admin cannot be deleted');
//     }
//     next();
// });

// module.exports = mongoose.model('User', userSchema);

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
