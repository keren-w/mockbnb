const Constants = require('../constants');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(Constants.mongo.uri, {useMongoClient: true})

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    first: String,
    last: String,
    username: String,
    password: String,
    picture: String
}, { toJSON: { virtuals: true } })

UserSchema.methods = {

    getUser(id) {
        return this.find({ _id: id })
      },

    generateToken() {
        return jwt.sign({
           _id: this._id
        }, Constants.security.sessionSecret, {
           expiresIn: Constants.security.sessionExpiration,
        });
    }
}

const UserModel = mongoose.model('User', UserSchema)

async function checkLogin({username, password}) {
    const user = await UserModel.findOne({ username: username })
    let authenticated = user && user.password === password;

    if (!authenticated) {
        const err = new Error('Please verify your credentials.')
        err.status = 401;
        return ({success: false, err: err})
      }

    const token = user.generateToken()
    let {first, last, picture} = await user;
    return ({success: true, first, last, picture, token})
  }

  async function addNewUser(newUserDetails) {
    const user = await UserModel.findOne({ username: newUserDetails.username})
        if (user) {
            return {
                success: false,
                message: 'Username us already registered'
            }
        }
    const userInserted = await UserModel.create(newUserDetails)
    return { success: true }
  }

module.exports = { checkLogin, addNewUser }
