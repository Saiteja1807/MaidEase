import mongoose from 'mongoose';

import { UserDetails } from '../model/LoginModel.js';

const loginDetails = mongoose.model('UserDetails', UserDetails);

export const loginSuccessful = (req, res) => { 
    console.log(req.params.email)
    loginDetails.findById(req.params.email, (err, loginDetail) => {
        if (err) {
            res.send(err);
        }
        res.json(loginDetail);
    });
}
