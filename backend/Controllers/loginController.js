const loginModel  = require('../models/login');



const creatlogin = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const login = new loginModel ({
            email,
            password
        });

        await login.save();
        res.status(201).json(login);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getLogin = async (req, res) => {
    try {
        const login = await loginModel .find();
        res.status(200).json(login);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getLogin,creatlogin};
