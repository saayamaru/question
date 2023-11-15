<template>
     <v-container fluid>
        <v-row align="center" justify="center" style="height: 100vh;">
        <v-col cols="12" md="8">
            <v-card class="question-cards">
                <v-card-title>
                    <span class="headline">Question Form</span>
                </v-card-title>
                
                <v-card-text>
                  <v-text-field v-model="email" label="Email" outlined :rules="emailRules" required></v-text-field>
                </v-card-text>
                
                <v-card-actions class="justify-end">
                    <v-btn @click="submitForm" class="submit-button">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailRules: [ v => /.+@.+/.test(v) || 'Invalid Email address' ]
    };
  },
  methods: {
    async submitForm() {
      await this.$axios
        .post(`${process.env.baseUrl}/user/createUser`,{email: this.email})
        .then((res) => {
                if (res.data.status === 'success') {
                  this.$router.push("/question");
                }
              });
    },
  },
};
</script>
<style lang="scss" scoped>
    .question-cards {
        padding: 10%;
    }

    .submit-button {
        letter-spacing: unset;
        width: 100%;
        text-transform: uppercase;
        background-color: #f15b2a !important;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 700;
        padding: 22px 0px !important;
    }
</style>