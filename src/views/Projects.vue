<template>
  <div class="projects">
    <h1>This is a project page</h1>
    <project-overview />
  </div>
</template>

<script>
import ProjectOverview from "@/components/ProjectOverview.vue";

export default {
  components: {'project-overview':ProjectOverview},
  data() {}
}
</script>

<style scoped>

</style>

