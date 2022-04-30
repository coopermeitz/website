<template>
  <div class="home">
    <!-- <a href="@/assets/coopermeitz-resume.pdf" target="_blank"
      >Download my resume
    </a> -->
    <card-gallery />
  </div>
</template>

<script>
import CardGallery from "@/components/home/Gallery.vue";
export default {
  name: "Home",
  components: { CardGallery },
};
</script>

<style scoped>
#home {
  align-items: center;
}

.card-gallery {
  display: flex;
  height: 100%;
}
</style>
