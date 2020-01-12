import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import VueResource from 'vue-resource';
import { Header, Tabbar, TabItem } from "mint-ui";
import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css";

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueResource);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
