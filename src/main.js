import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import VueResource from 'vue-resource';
import { Header, Tabbar, TabItem, Button } from "mint-ui";
import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css";
import moment from 'moment';

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.use(VueResource);

Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss'){
  console.log('format : ' + dateStr);
  return moment(dateStr).format(pattern);
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
