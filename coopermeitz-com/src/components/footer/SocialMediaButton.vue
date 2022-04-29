<template>
  <v-btn
    id="social-media-button"
    @click="openProfile()"
    outlined
    rounded
    elevation="2"
  >
    <img
      :src="`${publicPath}${logoFileUrl}`"
      height="25px"
      width="25px"
      :alt="altText"
    />
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "social-media-button",
  props: {
    // The filename of the logo PNG. Does not need any path to it, just the filename.
    logoFileUrl: { type: String, required: true },
    // The external URL that the button should open a new tab for when clicked.
    externalUrl: { type: String, required: true },
    // Text that is displayed to the right of the company's icon.
    text: { type: String, required: true },
    // Alt text for the logo for accessibility/errors.
    altText: { type: String, required: true },
  },
  methods: {
    /**
     * @vuese
     * Opens a new tab of the link that is specified as a prop.
     */
    openProfile() {
      window.open(this.externalUrl, "_blank");
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
#social-media-button {
  display: flex;
  align-items: center;
  background-color: white;
}
</style>