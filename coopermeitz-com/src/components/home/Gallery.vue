<template>
  <v-col>
    <!-- centered row for holding the currently shown card -->
    <v-row id="current-card" class="centered-row">
      <baseball-card-component v-bind="cards[currentIndex]" />
    </v-row>
    <!-- centered row for holding the buttons for cycling cards -->
    <v-row id="gallery-controller" class="centered-row">
      <v-btn @click="swapIndex(-1)" icon x-large>
        <v-icon> mdi-arrow-left-drop-circle </v-icon>
      </v-btn>
      <v-btn @click="swapIndex(1)" icon x-large>
        <v-icon> mdi-arrow-right-drop-circle </v-icon>
      </v-btn>
    </v-row>
    <v-row class="centered-row">
      <h3>Flip the cards by clicking on them.</h3>
    </v-row>
  </v-col>
</template>

<script>
import { initializeCards } from "@/personal-data/generateCards.js";
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
    /**
     * @vuese
     * Swaps the current index value so a new card can be shown. The method
     * also handles cases where the index would be out of bounds with the array.
     * @param {Number} delta the amount to change the current index by.
     * -1 denotes moving left one card and +1 denotes moving right one card.
     * Should only be called with units of length 1 (to avoid skipping a card) but
     * can technically be used with any number.
     */
    swapIndex(delta) {
      this.currentIndex = this.mod(
        this.currentIndex + delta,
        this.cards.length
      );
    },

    /**
     * @vuese
     * Event listener for 'keydown' events for the left and right arrow keys.
     * Allows the keys to simulate button presses of the left and right arrows,
     * respectively. A left arrow click will move the gallery one card to the left
     * and a right arrow click will move the gallery one card to the right.
     * @param {Event} e the 'keydown' event.
     */
    handleArrowClick(e) {
      switch (e.key) {
        case "ArrowLeft":
          this.swapIndex(-1);
          break;
        case "ArrowRight":
          this.swapIndex(1);
          break;
      }
    },
    /**
     * @vuese
     * Helper method for handling mod calculations of potentially
     * negative numbers. Returns the positive value that is a positive,
     * valid index of the array.
     * @param {Number} n the value that the mod operation is applied to.
     * @param {Number} m the divisor of the mod operation.
     * @returns {Number} the positive mod value of n % m. A valid index
     * of the array of cards.
     */
    mod(n, m) {
      return ((n % m) + m) % m;
    },
  },

  mounted() {
    // Add the event listener to change cards on arrow clicks.
    window.addEventListener("keydown", this.handleArrowClick);
  },
};
</script>

<style scoped>
.centered-row {
  display: flex;
  justify-content: center;
}
</style>