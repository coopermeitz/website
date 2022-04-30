<template>
  <div id="card">
    <vue-flip active-click height="100%" width="100%">
      <template v-slot:front>
        <div class="card-appearance">
          <img
            class="card-photo"
            :src="`${publicPath}${imageUrl}`"
            width="100%"
          />
          <v-col>
            <baseball-player />
          </v-col>
          <v-col>
            <v-row>
              <div class="name">COOPER MEITZ</div>
            </v-row>
            <v-row>
              <div class="position">{{ position }}</div>
            </v-row>
          </v-col>
        </div>
      </template>
      <template v-slot:back>
        <div class="card-appearance">
          <ul>
            <li v-for="(p, index) in bulletPoints" :key="index">{{ p }}</li>
          </ul>
        </div>
      </template>
    </vue-flip>
  </div>
</template>

<script>
import VueFlip from "vue-flip";
import BaseballPlayer from "@/components/home/BaseballPlayer.vue";
export default {
  name: "baseball-card",
  components: { "vue-flip": VueFlip, BaseballPlayer },
  props: {
    // The filename of the picture that will be used for this card.
    imageUrl: { type: String, required: true },
    // What 'position' I played during the duration of this card. (ie. elementary school)
    position: { type: String, required: true },
    // Bullet points of interesting facts to put on the back of the card. This will act
    // as the card's stats.
    bulletPoints: { type: Array, required: true },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

I got most of the CSS available from this project (MIT license).
https://codepen.io/kitjenson/pen/YoLWqX?editors=1111
<style scoped>
#card {
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
}
.card-appearance {
  background-color: lemonchiffon;
  width: 500px;
  height: 600px;
}

.card-photo {
  max-width: 500px;
  border: 12px solid lemonchiffon;
  display: block;
}

.name {
  font-family: "Arial Condensed", sans-serif;
  text-align: right;
  width: 100%;
  font-size: 50px;
  line-height: 55px;
  position: absolute;
  right: 20px;
  bottom: 50px;
}

.position {
  font-family: "Arial Condensed", sans-serif;
  font-size: 30px;
  font-weight: 600;
  text-align: right;
  width: 100%;
  line-height: 38px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>