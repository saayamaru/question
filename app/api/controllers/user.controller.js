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
      res.json({
        status: "success",
        data: createUser
      });

    } catch (error) {

      res.status(500).json({

        error: error

      })
    }
  }

  static async apiGetUserById(req, res, next) {
    try {

      let id = req.params.id || {};
      const UserId = await UserService.getUserbyId(id);
      res.json(UserId);

    } catch (error) {

      res.status(500).json({
        error: error
      })
    }

  }

  static async apiUpdateUser(req, res, next) {
    try {

      const userId = req.params.id;
      const updateFields = {
        score: req.body.score
      };

      await UserService.updateUserService(userId, updateFields);

      const response = {
        success: true,
        message: "User updated successfully",
      };
      
      res.json(response);
    } catch (error) {

      console.error(`Error updating user: ${error.message}`);
      res.status(500).json({
        error: error.message || "Internal Server Error",
      });

    }
  }

}