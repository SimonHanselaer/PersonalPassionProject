import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";
import firebase from "firebase";

Vue.config.productionTip = false;

let app = '';

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
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      apolloProvider: createProvider(),
      render: h => h(App)
    }).$mount("#app");
  }
})

