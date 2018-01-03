var queryUsers = require('../models/users.model')
// var bcrypt

class authController {
    async login(req, res) {
        let {username,password} = req.body;
        let loginResult = await queryUsers.checkLogin({username, password});
        res.status(200).json(loginResult);
    }
}

module.exports = new authController();