<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Question 1:</v-card-title>
              <v-card-text>
                <v-radio-group v-model="selectedOption">
                  <v-radio label="A" value="A"></v-radio>
                  <v-radio label="B" value="B"></v-radio>
                  <v-radio label="C" value="C"></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col>
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: null,
      };
    },
    methods: {
      submitForm() {
        // Handle the form submission logic here
        console.log('Selected Option:', this.selectedOption);
      },
    },
  };
  </script>
  