<template>
  <v-btn id="social-media" @click="openProfile()" outlined rounded elevation="2">
    <img :src="`${publicPath}${logoFileUrl}`" height="25px" width="25px" :alt="altText"/> {{text}}
  </v-btn>
</template>

<script>
export default {
  name: "social-media-button",
  props: {
      logoFileUrl: String,
      externalUrl: String,
      text: String,
      altText: String
  },
  methods: {
      openProfile() {
          window.open(this.externalUrl, "_blank")
      }
  },
  data() {
      return {
          publicPath: process.env.BASE_URL
      }
  }
};
</script>

<style scoped>
#social-media {
  display: flex;
  align-items: center;
  background-color: white;
}
</style>