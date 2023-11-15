<template>
    <Question/>
  </template>
  
  <script>
  import Question from '@/components/question/questionComponent.vue'
  
  export default {
    layout: "mainLayout",
    auth: false,
    components: {
      Question,
    },
  }
  </script>
  
  <style lang="scss" scoped>
  </style>
  