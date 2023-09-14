const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Register 

router.post('/register', async (req, res) => {

    try{

        // Checking if user is already exist or not
        const foundUser = await User.findOne({email: req.body.email});
        if(!foundUser){

            // Hashing Password
            let hashPassword = await bcrypt.hash(req.body.password, 10);

            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hashPassword
            })
            console.log(user);
            res.status(201).json(user);
        }
        else{
            res.status(400).send('User already exists');
        }
    }
    catch(err){
        console.log(err);
        res.send("Server Error")
    }

})



module.exports = router;