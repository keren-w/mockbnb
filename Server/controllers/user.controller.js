var queryUsers = require('../models/users.model');

class usersController {
    async signup(req, res) {
        let {first, last, username, password, picture} = req.body;
        let signUpResult = await queryUsers.addNewUser(req.body);
        console.log(signUpResult);
        res.status(200).json(signUpResult);
    }
}

module.exports = new usersController();