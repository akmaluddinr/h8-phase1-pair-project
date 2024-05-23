const { Doctor } = require("../models");
class Controller {
    
    static async home(req, res) {
        try {
        const dok = await Doctor.findAll();
        res.send("Home", { dok })
        } catch (error) {
            res.send(error.message);
        }
    }

    static async home(req, res) {
        try {

        } catch (error) {
            res.send(error.message);
        }
    }

    static async home(req, res) {
        try {

        } catch (error) {
            res.send(error.message);
        }
    }

    static async home(req, res) {
        try {

        } catch (error) {
            res.send(error.message);
        }
    }

    static async home(req, res) {
        try {

        } catch (error) {
            res.send(error.message);
        }
    }

    static async home(req, res) {
        try {

        } catch (error) {
            res.send(error.message);
        }
    }

    static async home(req, res) {
        try {

        } catch (error) {
            res.send(error.message);
        }
    }
}

module.exports = Controller;