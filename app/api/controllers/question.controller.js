const QuestionService = require("../services/questionService")


module.exports = class User {
    static async apiGetAllQuestions(req, res) {
      try {

        const questions = await QuestionService.getAllQuestion();

        if (!questions) {

          res.status(404).json("There are no question published yet!")

        }
        
        res.json(questions);

      } catch (error) {

        res.status(500).json({

          error: error

        })

      }
  
    }
    static async apiCreateQuestion(req, res) {
      
      try {

        const createQuestion = await QuestionService.createQuestion(req.body)

        res.json(createQuestion);

      } catch (error) {

        res.status(500).json({

          error: error

        })
      }
      
    }
  }