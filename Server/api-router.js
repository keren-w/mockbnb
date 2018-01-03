var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

let LocationsController = require('./controllers/locations.controller');
let AuthController = require('./controllers/auth.controller');
let UserController = require('./controllers/user.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false,
}));

router.get('/locations', LocationsController.fetchLocations);
router.get('/locations/:id', LocationsController.fetchLocationById);
router.post('/login', AuthController.login);
router.post('/sign-up', UserController.signup);

module.exports = router;