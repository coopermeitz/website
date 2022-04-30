<template>
  <div class="about">
    <h1>This is a page of projects I've worked on. It's a work-in-progress.</h1>
    <project-overview v-for="(p, index) in projects" :key="index" v-bind="p" />
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