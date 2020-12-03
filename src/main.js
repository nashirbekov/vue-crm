import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import localizeFilter from "./filters/localize.filter";
import tooltipDirective from './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin';
import titlePlugin from './utils/title.plugin'
import Loader from "./components/app/Loader";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter("date", dateFilter);
Vue.filter("localize", localizeFilter);
Vue.filter("currency", currencyFilter);
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyBmnF1-Na3aT7D5S46uHCjZC6fpjWHg5Dk",
  authDomain: "vue-crm-nurbek.firebaseapp.com",
  databaseURL: "https://vue-crm-nurbek.firebaseio.com",
  projectId: "vue-crm-nurbek",
  storageBucket: "vue-crm-nurbek.appspot.com",
  messagingSenderId: "282435126389",
  appId: "1:282435126389:web:7caa46b5478196e99e243c",
  measurementId: "G-EP01D5F8VP"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app")
  }
})

