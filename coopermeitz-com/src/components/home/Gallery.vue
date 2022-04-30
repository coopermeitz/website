<template>
  <div>
    <div id="current-card">
      <baseball-card-component v-bind="cards[currentIndex]" />
    </div>
    <div id="gallery-controller">
      <v-btn @click="swapIndex(-1)" icon x-large> <v-icon> mdi-arrow-left-drop-circle </v-icon> </v-btn>
      <v-btn @click="swapIndex(1)" icon x-large> <v-icon> mdi-arrow-right-drop-circle </v-icon> </v-btn>
    </div>
  </div>
</template>

<script>
import { initializeCards } from "@/utility-classes/BaseballCard.js";
import BaseballCardComponent from "@/components/home/BaseballCard.vue";
export default {
  name: "card-gallery",
  components: { BaseballCardComponent },
  data() {
    return {
      cards: initializeCards(),
      currentIndex: 0,
    };
  },
  methods: {
    swapIndex(i) {
      if (this.currentIndex === 0 && i < 0) {
        this.currentIndex = this.cards.length - 1;
      } else {
        this.currentIndex = (this.currentIndex + i) % this.cards.length;
      }
    },
  },
};
</script>

<style scoped>
#current-card {
  display: flex;
  justify-content: center;
}
</style>