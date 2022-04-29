<template>
  <div class="home">
    <!-- <a href="@/assets/coopermeitz-resume.pdf" target="_blank"
      >Download my resume
    </a> -->
    <v-row>
      <v-col v-for="card in cards" :key="card.imageUrl">
        <baseball-card-component v-bind="card" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {initializeCards} from "@/utility-classes/BaseballCard.js";
import BaseballCardComponent from "../components/home/BaseballCard.vue";
export default {
  name: "Home",
  components: {
    BaseballCardComponent,
  },
  data() {
    return {
      cards: initializeCards(),
    };
  },
};
</script>

<style scoped>
#home {
  align-items: center;
}
</style>
