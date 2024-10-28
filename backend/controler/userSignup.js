const userModel = require("../models/userModels");
const bcrypt = require('bcryptjs');
async function userSignup(req, res) {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (user) {
            throw new Error('Email already exists');
        }
        if (!email) {
            throw new Error('Please provide an email');
        }
        if (!password) {
            throw new Error('Please provide a password');
        }
        if (!name) {
            throw new Error('Please provide a name');
        }

        console.log("req.body", req.body);
        
        const salt = bcrypt.genSaltSync(10);
        const hashPassword =  await bcrypt.hashSync("password", salt);
        if (!hashPassword) {
            throw new Error('Somthing is wrong!');
        }
        const payload ={
            ...req.body,
            password : hashPassword,
        }
        const userData = new userModel(req.body)
        const saveUser =userData.save()
        // Assuming further logic will go here, like creating a user in the database

        res.status(201).json({
            data : saveUser,
            success: true,
            message: 'User registered successfully',
            error: false
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            success: false,
            message: err.message,
            error: true
        });
    }
}

module.exports = userSignup;
