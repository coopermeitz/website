<template>
  <v-btn id="linkedin" @click="openProfile()" outlined rounded elevation="2">
    <img :src="linkedInLogo" height="25px" width="25px"/> Connect
  </v-btn>
</template>

<script>
export default {
  name: "linked-in-button",
  data() {
    return {
      linkedInLogo: require("@/assets/company-logos/linkedin.png"),
      linkedInProfile: "https://www.linkedin.com/in/coopermeitz/"
    };
  },
  methods: {
      openProfile() {
          window.open(this.linkedInProfile, "_blank")
      }
  }
};
</script>

<style scoped>
#linkedin {
  display: flex;
  align-items: center;
  background-color: white;
}
</style>