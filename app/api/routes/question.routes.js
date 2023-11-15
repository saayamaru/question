const express = require('express');
const router = express.Router();
const questionCtrl  = require("../controllers/question.controller");


//get medthod
router.get('/getAllQuestion', questionCtrl.apiGetAllQuestions);
// router.get('/login', loginView);

//post medthod
router.post("/createQuestion", questionCtrl.apiCreateQuestion);
// router.post("/register", userController);
module.exports = router;