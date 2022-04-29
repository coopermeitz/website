<template>
  <div class="about">
    <h1>This is an about page</h1>
    <project-overview v-for="p in projects" :key="p.title" v-bind="p" />
  </div>
</template>

<script>
import Project from "@/utility-classes/Project.js";
import projectOverview from "@/components/ProjectOverview.vue";

export default {
  components: { projectOverview },
  data() {
    return {
      projects: [
        new Project("Website", "A simple website written with Vue2."),
        new Project(
          "Tweet Rater",
          "A simple polling bot that would rate my tweets."
        ),
      ],
    };
  },
};
</script>