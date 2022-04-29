<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      Cooper Meitz
      <v-btn @click="$router.push({ path: '/', replace: true })">
        <v-icon>mdi-home</v-icon></v-btn
      >
      <v-btn @click="$router.push('projects')"> Projects</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <customFooter />
  </v-app>
</template>

<script>
import customFooter from "@/components/footer/Footer.vue";

export default {
  name: "App",
  components: { customFooter },

  data: () => ({
    //
  }),
};
</script>
