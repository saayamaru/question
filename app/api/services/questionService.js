const questions = require("../models/mongo_db_14112023_quetion");

module.exports = class UserService {
    static async getAllQuestion() {
        try {
            const allQuestions = await questions.find();
            return allQuestions;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }

    static async createQuestion(params) {
        try {
            const newQuestion = {
                question: params.question,
                answer: params.answer,
            }
            const response = await new questions(newQuestion).save();
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}