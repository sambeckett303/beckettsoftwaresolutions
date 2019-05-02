import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './main-component.vue';
import Home from './home.vue';
import Services from './services.vue';
import Work from './work.vue';
import Reviews from './reviews.vue';
import Blog from './blog.vue';
import BlogPost from './blog-post.vue';
import About from './about.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/services', component: Services },
	{ path: '/work', component: Work },
	{ path: '/reviews', component: Reviews },
	{ path: '/about', component: About },
	{ path: '/blog', component: Blog },
	{ path: '/blog/:title', component: BlogPost, props: true }
];

const router = new VueRouter({
  routes
})

Vue.use(VueRouter);

let MainComponent = Vue.extend(Main);

window.onload = function () {
	const app = new MainComponent({
		router,
	}).$mount('#main');
}
