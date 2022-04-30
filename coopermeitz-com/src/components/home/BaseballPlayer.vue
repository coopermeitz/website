<template>
    <div class="overlay"></div>
</template>

<script>
export default {
    name: "baseball-player"
}
</script>

<style scoped>

.overlay {
  width: 15vmin;
  height: 15vmin;
  border: 6px solid lemonchiffon;
  background: #ffff33;
  position: absolute;
  bottom: 50px;
  left: 30px;
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
  left: -10%;
  transform: rotate(-45deg);
  mix-blend-mode: multiply;
}
</style>