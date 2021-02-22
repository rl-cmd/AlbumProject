const User = require('../models/User')
const env = require("dotenv")
const jwt = require("jsonwebtoken")
// env.config()

const login = (req, res) => {
    let userdetails = req.body;
    console.log(userdetails)
    User.findOne({ name: userdetails.name, pass: userdetails.pass })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not exists' });
            }
            else {
                return res.status(200).json(user);
            }
        }).catch((err) => {
            res.status(500).json({ err });
        })
}

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        //צריך לבדוק אם השם והסיסמא כבר קיימים במערכת 

        // const u = User.findOne({ name: req.body.name, pass: req.body.pass });
        // if (user!=null) {
        //     return res.json({ message: 'The name and the pass already in the sistem....' });
        // }

        let user = new User(req.body);
        let newUser = await user.save();

        // const token = jwt.sign({ userName: userName, password: password }, process.env.SECRET)
        // res.status(200).json({ user: user, token: token })

        console.log(user);
        return res.status(200).json(user)
    } catch (err) {
        return res.status(500).json({ "err": err.message })

    }
}
const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.query.idUser)
        .then((user) => {
            if (!user) {
                return res.status(500).send(user)
            };
            return res.status(200).send(user);
        }).catch((err) => {
            console.log(`err ${err}`);
        })
}

const getAllUsers = async (req, res) => {

    try {
        let users = await User.find()
        if (!users) {
            return res.status(404).json({})
        }
        else {
            return res.status(200).json(users)
        }
    }
    catch (error) {
        return res.status(500).json({ "err": error.message })
    }
}

const findUserById = (req, res) => {
    User.findById(req.query.id)
        .then((user) => {
            if (!user) {
                return res.status(500).send(user)
            }
            return res.status(200).send(user);
        }).catch((err) => {
            console.log(`err ${err}`);
        })
}
module.exports = { login, findUserById, updateUser, createUser, getAllUsers }
