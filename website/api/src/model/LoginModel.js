
import mongoose from 'mongoose';

const schema = mongoose.Schema;

export const UserDetails = new schema({
    userId:{type: String},
    firstName:{type: String},
    lastName:{type: String},
    email: {
        type: String,
        required: 'Please enter your email address.'
    },

    password: {
        type: String,
        required: 'Please enter your password.'
    },
    isCustomer:{type: String}
});