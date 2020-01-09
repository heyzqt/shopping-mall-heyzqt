import Vue from 'vue'
import App from './App.vue'
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header);

new Vue({
  el: '#app',
  render: h => h(App)
})
