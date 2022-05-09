import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import vue2Filters from 'vue2-filters';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

//Vue.use(vue2Filters);
//Vue.filter("imageUrl", function (image) {
  //return '${imageUrl}/${image}?timestamp=${Date.now()}';
//});