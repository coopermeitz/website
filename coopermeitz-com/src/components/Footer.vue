<template>
  <v-footer color="primary"> <LinkedInButton /></v-footer>
</template>

<script>
import LinkedInButton from "@/components/footer/LinkedInButton.vue";
export default {
  name: "footer",
  components: {LinkedInButton},
  data() {
      // linkedInUrl: "https://www.linkedin.com/in/coopermeitz/"
  },
  methods: {
  }
};
</script>

<style scoped>
</style>