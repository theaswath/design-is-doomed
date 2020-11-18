import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

// const store = Vue.observable({
//   survey:{
//     answers: [],
//     add(answer){
//       store.survey.answers.push(answer)
//     }
//   }
// });

// Vue.prototype.$store = store;
// Vue.prototype.$qset = 0;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
