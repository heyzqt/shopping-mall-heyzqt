import Vue from "vue";
import VueRouter from 'vue-router';
import THome from './components/HomeContainer';
import TMember from './components/MemberContainer';
import TCart from './components/CartContainer';
import TSearch from './components/SearchContainer';
import NewsList from './components/home/NewsList';
import NewsInfo from './components/home/NewsInfo';
import PhotoList from './components/subcomponents/photos';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: THome},
        { path: '/member', component: TMember},
        { path: '/cart', component: TCart},
        { path: '/search', component: TSearch},
        { path: '/home/news', component: NewsList},
        { path: '/home/newsinfo/:id', component: NewsInfo},
        { path: '/home/photos', component: PhotoList}
    ],
    linkActiveClass: 'router-link-active-heyzqt' //全局配置默认激活的class
})


