import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase/app'
import 'firebase/database'
import store from './store'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA-rWp1OOJy3DdBDuiSZXgNqiOQnxEgfvc",
  authDomain: "inventory-management-4ca0f.firebaseapp.com",
  databaseURL: "https://inventory-management-4ca0f.firebaseio.com",
  projectId: "inventory-management-4ca0f",
  storageBucket: "inventory-management-4ca0f.appspot.com",
  messagingSenderId: "1062278206642",
  appId: "1:1062278206642:web:3bd896c437796d01eaa5ab"
});

export const db = firebase.database();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
