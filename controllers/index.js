const { Model } = require("sequelize");
const { User, Doctor, Appointment, UserProfile } = require("../models");
const bcrypt = require('bcryptjs');


class Controller {
    
    static async home(req, res) {
        try {
            res.render('Home');
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
        const {error} = req.query;
        try {
            res.render('Register', {error});
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
        const { username, password } = req.body;
        try {
            const user = await User.findOne({
                where: { username }
            });

            if (user) {
                const isValidPassword = bcrypt.compareSync(password, user.password);
                if (isValidPassword) {
                    req.session.userId = user.id;
                    const id = user.id
                    return res.redirect(`/?id=${id}`);
                } else {
                    const error = 'username/password yang Anda masukkan salah';
                    return res.redirect(`/login?error=${error}`);
                }
            }
            if (!user) {
                const error = 'username/password yang Anda masukkan salah';
                return res.redirect(`/login?error=${error}`);
            } 
        } catch (error) {
            res.send(error.message);
        }
    }

    static async getProfile(req, res) {
        try {
            const data = await User
            res.render('MyProfile');
        } catch (error) {
            res.send(error.message);
        }
    }

    static async showDoctors(req, res) {
        try {
            const dok = await Doctor.findAll();
            res.render('Doctor', { dok });
        } catch (error) {
            res.send(error.message);
        }
    }
    
    static async showAppointments(req, res) {
        try {
            
            res.send('showAppointments')
        } catch (error) {
            res.send(error.message);
        }
    }

    static async addAppointment(req, res) {
        try {
            res.send('Add Appointment')
        } catch (error) {
            res.send(error.message);
        }
    }

    static async postAddAppointment(req, res) {
        try {
            // await Appointment.create({});
            // res.render('AddAppointment', {data});
        } catch (error) {
            res.send(error.message);
        }
    }

    static async getLogout(req, res) {
        try {
            await req.session.destroy();
            res.redirect('register')
        } catch (error) {
            res.send(error.message);
        }
    }

    static async fillProfile(req, res) {
        try {
            res.render('FillProfile');
        } catch (error) {
            res.send(error.message);
        }
    }

    static async postFillProfile(req, res) {
        try {
            await UserProfile.create(req.body);
            res.redirect('/profile');
        } catch (error) {
            res.send(error.message);
        }
    }
}




module.exports = Controller;