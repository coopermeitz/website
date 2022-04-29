<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle> {{ description }} </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "project-overview",
  props: {
    // The title of the project.
    title: String,
    // A brief description of the project.
    description: String,
  },
};
</script>

<style scoped>
</style>