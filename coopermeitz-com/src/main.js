import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AspectRatio from "v-aspect-ratio";

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    AspectRatio,
    render: h => h(App)
}).$mount('#app')
