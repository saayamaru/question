<template>
    <v-app dark>
      <div class="form-bg">
        <v-container>
            <Nuxt />
          </v-container>
      </div>
    </v-app>
</template>
<style lang="scss" scoped>
  .form-bg {
    min-height: 100dvh;
    background-color: skyblue;
    -webkit-background-size: cover;
    background-size: cover;
    width: 100dvw;
    height: auto;
  }
</style>