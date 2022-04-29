<template>
  <div id="card">
    <vue-flip active-click>
      <template v-slot:front>
        <img :src="`${publicPath}${imageUrl}`" />
      </template>
      <template v-slot:back>
        <ul>
          <li v-for="p in bulletPoints" :key="p">{{ p }}</li>
        </ul>
      </template>
    </vue-flip>
  </div>
</template>

<script>
import VueFlip from "vue-flip";

export default {
  name: "baseball-card",
  components: { "vue-flip": VueFlip },
  props: {
    // The filename of the picture that will be used for this card.
    imageUrl: String,
    // Bullet points of interesting facts to put on the back of the card. This will act
    // as the card's stats.
    bulletPoints: Array,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
#card {
  /* these dimensions are to size the card with the same ratio as a real card*/
  height: 250px;
  width: 180px;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>