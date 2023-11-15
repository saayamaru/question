<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col v-for="(item, index) in question" :key="index">
            <v-card>
              <v-card-title>{{ item.question }}</v-card-title>
              <v-card-text v-for="(answer, ansIndex) in item.answer" :key="ansIndex">
                <v-radio-group v-model="item.selected">
                  <v-radio :label="answer.question" :value="answer.question"></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6" md="2" lg="2">
            <v-btn class="custom-button" type="submit" color="primary">Submit</v-btn>
          </v-col>
          <v-col v-if="revealAnswerButton" cols="12" sm="6" md="3" lg="2">
            <v-btn class="custom-button" @click="showAnswer()" color="info">Show Answer</v-btn>
          </v-col>
          <v-col v-if="revealAnswer" class="custom-text">
            The Answer is = {{ this.answer[0].question }}
          </v-col>
          <v-col cols="12" class="custom-text">
          Email {{ this.email }} : Score {{ this.score }}
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userId: '',
        email: '',
        revealAnswer: false,
        revealAnswerButton: false,
        score: 0,
        question: [],
        user: [],
        answer: []
      };
    },
    mounted() {
      this.userId = this.$route.query.id
      this.email = this.$route.query.email
      this.getQuestion();
    },
    methods: {
      async getQuestion() {
        await this.$axios
        .get(`${process.env.baseUrl}/question/getAllQuestion`)
        .then((res) => {
          this.question = res.data.map((x) => ({
          ...x,
          selected : '',
          }))
                console.log(this.question)
              });
      },
      async submitForm() {
        const selectedAnswer = this.question[0].selected
        const allAnswered = this.question.every((q) => q.selected !== '');
        const findScore = this.question.map((x) => x.answer.find((q) => q.question === selectedAnswer))

        if (findScore && findScore.length > 0 && findScore[0] && findScore[0].answer) {
          this.score++;
        } else if (this.score > 0 && findScore && findScore.length > 0 && findScore[0] && !findScore[0].answer) {
          this.score--;
        }

          if (!allAnswered) {
          // Do something when there is an unanswered question
          console.log('user didnt answer')
        } else {
          this.revealAnswerButton = true;
          console.log('submit ' , this.question[0].selected)

          this.user = {
                id : this.userId,
                score : this.score
                }

          console.log('user form is ', this.user);

           // methods submit user --> question form
          await this.$axios
          .put(`${process.env.baseUrl}/user/UpdateScore/${this.userId}`, this.user)

        }
      },
      showAnswer() {
        this.answer = this.question.map((x) => x.answer.find((q) => q.answer === true))
        this.revealAnswer = true;
      }
    },
  };
  </script>
  <style lang="scss" scoped>
      .custom-text {
        color: black;
        font-weight: 600;
        display: flex;
        align-items: center;
      }

      .custom-button {
        width: 100%;
      }
</style>
  