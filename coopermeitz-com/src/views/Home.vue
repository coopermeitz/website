<template>
  <div class="home">
    <!-- <a href="@/assets/coopermeitz-resume.pdf" target="_blank"
      >Download my resume
    </a> -->
    <baseball-card image-url="elementary.jpg" :bulletPoints="['2-time spelling beee champion', 'won the tech fair once']" />
  </div>
</template>

<script>
import BaseballCard from "../components/home/BaseballCard.vue";
export default {
  name: "Home",
  components: {
    BaseballCard,
  },
};
</script>
