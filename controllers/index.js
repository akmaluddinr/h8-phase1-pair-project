const { Doctor } = require("../models");


class Controller {
    
    static async home(req, res) {
        try {
        const dok = await Doctor.findAll();
        res.render("Home", { dok })
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

    static async showDoctorById(req, res) {
        try {
            console.log('showDoctorById')
        } catch (error) {
            res.send(error.message);
        }
    }
    
}




module.exports = Controller;