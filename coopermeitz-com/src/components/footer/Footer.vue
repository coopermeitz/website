<template>
  <!-- Footer fixed to the bottom of the screen -->
  <v-footer color="primary" app bottom fixed padless>
    <!-- LinkedIn button -->
    <social-media-button
      :logoFileUrl="linkedInLogo"
      :externalUrl="linkedInUrl"
      text="Connect"
      altText="LinkedIn Logo" />
    <!-- Twitter button -->
    <social-media-button
      :logoFileUrl="twitterLogo"
      :externalUrl="twitterUrl"
      text="Follow me"
      altText="Twitter Logo" />
    <!-- Github button -->
    <social-media-button
      :logoFileUrl="githubLogo"
      :externalUrl="githubUrl"
      text="Contribute"
      altText="Github Logo"
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
      twitterLogo: "twitter.png",
      githubUrl: "https://github.com/coopermeitz",
      githubLogo: "github.png",
    };
  },
  methods: {},
};
</script>

<style scoped>
.v-footer {
  display: flex;
  justify-content: center;
}
</style>