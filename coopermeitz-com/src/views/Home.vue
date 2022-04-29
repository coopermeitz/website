<template>
  <div class="home">
    <aboutMe />
    <a href="@/assets/coopermeitz-resume.pdf" target="_blank"
      >Download my resume
    </a>
  </div>
</template>

<script>

import aboutMe from "@/components/AboutMe.vue";
export default {
  name: "Home",
  components: {
    aboutMe,
  },
};
</script>
