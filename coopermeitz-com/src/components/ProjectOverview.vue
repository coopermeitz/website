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
    title: { type: String, required: true },
    // A brief description of the project.
    description: { type: String, required: true },
  },
};
</script>

<style scoped>
</style>