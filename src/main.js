import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import { Header, Tabbar, TabItem } from "mint-ui";
import "mint-ui/lib/style.css";

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
