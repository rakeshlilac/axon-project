
import express from 'express';
import { User } from '../entities/User';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);

const router = express.Router();
import { createQueryBuilder } from 'typeorm';

router.post('/api/user', async (req, res) => {
    const {
        userName,
        firstName,
        lastName,
        email,
        password
    } = req.body;

    const hash = bcrypt.hashSync(password, salt);

    const user = User.create({
        user_name: userName,
        first_name: firstName,
        last_name: lastName,
        work_email: email,
        password: hash
    });

    await user.save();

    return res.json(user);
});



router.post('/api/user/login', async (req, res) => {


    const { email,password } = req.body;

    console.log(email,password)

    const user = await User.findOne({work_email:email});

    if(user && user.password){

        let matched = await bcrypt.compare(password, user.password);

        var payload = {
            userId: user.id,
            firstName: user.user_name,
            email: user.work_email,
        };
        var token = jwt.sign({
            data: payload,
         
        }, "JWT_KEY", {
            expiresIn: '30 days'
        });

        return res.send({
            success:1,
            message:"success",
            token
        })
    }

    return res.send()


});

router.get('/api/user/profile', async (req, res) => {


    

    return res.send(req.headers.authorization)


});

export { router as createUserRouter };