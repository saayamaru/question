//js
const UserService = require("../services/userService")
//For Register Page
module.exports = class User {
  static async apiGetAllUser(req, res) {
    try {
      const users = await UserService.getAllUser();
      if (!users) {
        res.status(404).json("There are no users published yet!")
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({
        error: error
      })
    }

  }
  static async apiCreateUser(req, res) {
    try {
      const createUser = await UserService.createUsers(req.body)
      res.json(createUser);
    } catch (error) {
      res.status(500).json({
        error: error
      })
    }
  }
}