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

    static async getUserbyId(UserId) {

        try {

            const singleUserResponse = await User.findById({
                _id: UserId
            });

            return singleUserResponse;

        } catch (error) {

            console.log(`User not found. ${error}`)

        }
    }

    static async updateUserService(userId, updateFields) {
        try {
            const updateResponse = await User.updateOne({
                    _id: userId
                }, {
                    $set: updateFields
                } // Use $set to update specific fields
            );

            return updateResponse;
        } catch (error) {
            console.error(`Could not update user: ${error}`);
            throw error;
        }
    }
}