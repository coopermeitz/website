<template>
  <div id="card">
    <vue-flip active-click height="750px" width="540px">
      <template v-slot:front>
        <div class="card-appearance">
          <img
            class="card-photo"
            :src="`${publicPath}${imageUrl}`"
            height="80%"
            width="100%"
          />
          <div class="overlay"></div>
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
            <li v-for="p in bulletPoints" :key="p">{{ p }}</li>
          </ul>
        </div>
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
  /* these dimensions are to size the card with the same ratio as a real card*/
  height: 750px;
  width: 540px;
}

.card-appearance {
  background-color: lemonchiffon;
  height: 750px;
  width: 540px;
}

.card-photo {
  max-width: 100%;
  max-height: 100%;
  border: 12px solid lemonchiffon;
}

.name {
  font-family: "Arial Condensed", sans-serif;
  font-size: 50px;
  font-weight: 600;
  text-align: right;
  width: 100%;
  line-height: 80px;
  position: absolute;
  right: 20px;
  bottom: 50px;
}

.overlay {
  width: 150px;
  height: 150px;
  border: 6px solid lemonchiffon;
  background: #ffff33;
  position: absolute;
  bottom: 20px;
  left: 25px;
  font-family: monospace;
  line-height: 23px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  transform: rotate(45deg);
  /*   overflow:hidden; */
}
.overlay:after {
  content: "";
  background-image: url("https://images.onlinelabels.com/images/clip-art/GDJ/Vintage%20Baseball%20Player%20Illustration-265699.png");
  background-size: 100% 100%;
  width: 95%;
  height: 95%;
  position: absolute;
  top: -5%;
  left: -5%;
  transform: rotate(-45deg);
  mix-blend-mode: multiply;
}

.baseball-player {
  width: 100%;
  height: 100%;
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
  bottom: 35px;
}
</style>