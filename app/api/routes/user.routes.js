const express = require('express');
const router = express.Router();
const userCtrl = require("../controllers/user.controller");


//get medthod
router.get('/getAll', userCtrl.apiGetAllUser);
router.get("/:id", userCtrl.apiGetUserById);
// router.get('/login', loginView);

//post medthod
router.post("/createUser", userCtrl.apiCreateUser);
// router.post("/register", userController);
//PUT medthod
router.put("/UpdateScore/:id", userCtrl.apiUpdateUser);
module.exports = router;