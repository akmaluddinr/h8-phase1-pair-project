const { User, Doctor } = require("../models");
const bcrypt = require('bcryptjs');


class Controller {
    
    static async home(req, res) {
        try {
            const data = await Doctor.findAll();
            res.render('Home', {data});
        } catch (error) {
            res.send(error.message);
        }
    }

    static async getLogin(req, res) {
        const { error } = req.query;
        try {
            res.render('Login', {error});
        } catch (error) {
            res.send(error.message);
        }
    }

    static async getRegister(req, res) {
        try {
            res.render('Register');
        } catch (error) {
            res.send(error.message);
        }
    }

    static async postRegister(req, res) {
        
        try {
            await User.create(req.body);
            res.redirect('/login')
        } catch (error) {
            res.send(error.message);
        }
    }

    static async postLogin(req, res) {
        // console.log(req.body);
        const { username, password } = req.body;
        try {
            const user = await User.findOne({
                where: { username }
            });

            if (user) {
                const isValidPassword = bcrypt.compareSync(password, user.password);
                if (isValidPassword) {
                    req.session.userId = user.id;
                    return res.redirect('/');
                } else {
                    const error = 'invalid username/password';
                    return res.redirect(`/login?error=${error}`);
                }
            }
            if (!user) {
                const error = 'invalid username/password';
                return res.redirect(`/login?error=${error}`);
            } 
        } catch (error) {
            res.send(error.message);
        }
    }

    static async showDoctors(req, res) {
        try {
            console.log('showDoctors')
        } catch (error) {
            res.send(error.message);
        }
    }
    
    static async showAppointments() {
        try {
            console.log('showAppointments')
        } catch (error) {
            res.send(error.message);
        }
    }
}




module.exports = Controller;