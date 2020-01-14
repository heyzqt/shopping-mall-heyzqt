import Vue from "vue";
import VueRouter from 'vue-router';
import THome from './components/HomeContainer';
import TMember from './components/MemberContainer';
import TCart from './components/CartContainer';
import TSearch from './components/SearchContainer';
import NewsList from './components/home/NewsList';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: THome},
        { path: '/member', component: TMember},
        { path: '/cart', component: TCart},
        { path: '/search', component: TSearch},
        { path: '/home/news', component: NewsList}
    ],
    linkActiveClass: 'router-link-active-heyzqt' //全局配置默认激活的class
})


