import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import MainPage from "../ui/pages/MainPage/MainPage.vue";
import AboutPage from "../ui/pages/AboutPage/AboutPage.vue";
import HowItWorkPage from "../ui/pages/HowItWorksPage/HowItWorksPage.vue";
import LoginUserPageVue from "../ui/pages/LoginUserPage/LoginUserPage.vue";
import AdminLogin from "../ui/pages/AdminLogin/AdminLogin.vue";
import CandidatesSelection from "../ui/pages/CandidatesSelection/CandidatesSelection.vue";
import UserSelection from "../ui/pages/UserSelection/UserSelection.vue";
import CandidatesList from "../ui/pages/CandidatesList/CandidatesList.vue";

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
	{
		path: "/admin-login",
		name: "Sign In as admin",
		component: AdminLogin
	},
	{
		path: "/login",
		name: "Login User",
		component: LoginUserPageVue
	},
	{
		path: "/candidates-selection",
		name: "Select candidates",
		component: CandidatesSelection
	}, {
		path: "/user-selection",
		name: "user selection",
		component: UserSelection
	}, {
		path: "/candidates-maintenance",
		name: "Candidates list",
		component: CandidatesList
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
