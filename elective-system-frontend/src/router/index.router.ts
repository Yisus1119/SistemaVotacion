import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import MainPage from "../ui/pages/MainPage/MainPage.vue";
import AboutPage from "../ui/pages/AboutPage/AboutPage.vue";
import HowItWorkPage from "../ui/pages/HowItWorksPage/HowItWorksPage.vue"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Main",
		component: MainPage,
	},
	{
		path: "/about",
		name: "About",
		component: AboutPage,
	},
	{
		path: "/user-manual",
		name: "How it work",
		component: HowItWorkPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;