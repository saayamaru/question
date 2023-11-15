const User = require("../models/mongo_db_14112023_user");

module.exports = class UserService {
    static async getAllUser() {
        try {
            const allUser = await User.find();
            return allUser;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }
    static async createUsers(params) {
        try {
            const newUsers = {
                email: params.email
            }
            const response = await new User(newUsers).save();
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}