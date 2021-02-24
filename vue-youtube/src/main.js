import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/massage.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyA-WOXesfOT_oN9Idyt-XbafDvlSwgNsog',
  authDomain: 'vue--crm-dbf39.firebaseapp.com',
  databaseURL: 'https://vue--crm-dbf39.firebaseio.com',
  projectId: 'vue--crm-dbf39',
  storageBucket: 'vue--crm-dbf39.appspot.com',
  messagingSenderId: '645814709268',
  appId: '1:645814709268:web:fadc0e12b053570ed9cb01',
  measurementId: 'G-FNKM98ZMVY'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
