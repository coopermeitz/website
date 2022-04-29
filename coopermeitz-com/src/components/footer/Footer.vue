<template>
  <v-footer color="primary">
    <SocialMediaButton
      :logoFileUrl="linkedInLogo"
      :externalUrl="linkedInUrl"
      text="Connect"
      altText="LinkedIn Logo"
  />
  <SocialMediaButton
      :logoFileUrl="twitterLogo"
      :externalUrl="twitterUrl"
      text="Follow me"
      altText="Twitter Logo"
  /></v-footer>
</template>

<script>
import SocialMediaButton from "@/components/footer/SocialMediaButton.vue";
export default {
  name: "site-footer",
  components: { SocialMediaButton },
  data() {
    return {
      linkedInUrl: "https://www.linkedin.com/in/coopermeitz/",
      linkedInLogo: "linkedin.png",
      twitterUrl: "https://pastebin.com/arGTDXDM",
      twitterLogo: "twitter.png"
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>