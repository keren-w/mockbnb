var queryLocations = require('../models/locations.model');

class locationsController {
    fetchLocations(req, res) {
        queryLocations.getLocations()
            .then(list => res.send(list));
    }

    fetchLocationById(req, res) {
        let locationId = req.params.id;
        queryLocations.getLocationById(locationId)
            .then(foundLocation =>  res.send(foundLocation));
    }
}

module.exports = new locationsController();