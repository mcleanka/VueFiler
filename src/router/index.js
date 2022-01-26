import { createRouter, createWebHistory } from "vue-router"

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const NotFound = { template: "<h1>Oops, it looks like the page you're looking for doesn't exist.</h1>" }

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: "/:catchAll(.*)",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;