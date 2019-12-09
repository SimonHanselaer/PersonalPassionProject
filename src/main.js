import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

import { firestorePlugin } from "vuefire";
// import firebase from 'firebase/app';
import "firebase/firestore";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;

let app = "";

firebase.initializeApp({
  apiKey: "AIzaSyBPhNgyYREfkPbGyE9y-mSbrtIW1vjbjXY",
  authDomain: "personal-passion-project.firebaseapp.com",
  databaseURL: "https://personal-passion-project.firebaseio.com",
  projectId: "personal-passion-project",
  storageBucket: "personal-passion-project.appspot.com",
  messagingSenderId: "388989029865",
  appId: "1:388989029865:web:790ae55dabeee17d604f78",
  measurementId: "G-NJN1KLFMZX"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

Vue.use(firestorePlugin);
Vue.use(VModal);

export const db = firebase.firestore();
