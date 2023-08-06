import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import MainPage from "../ui/pages/MainPage/MainPage.vue";
import AboutPage from "../ui/pages/AboutPage/AboutPage.vue";
import HowItWorkPage from "../ui/pages/HowItWorksPage/HowItWorksPage.vue";
import LoginUserPageVue from "../ui/pages/LoginUserPage/LoginUserPage.vue";
import AdminLogin from "../ui/pages/AdminLogin/AdminLogin.vue";
import ElectionMainPageVue from "../ui/pages/ElectionMainPage/ElectionMainPage.vue";
import ResultsPageVue from "../ui/pages/ResultsPage/ResultsPage.vue";
import CandidatesSelectionVue from "../ui/pages/CandidatesSelection/CandidatesSelection.vue";
import UserSelectionVue from "../ui/pages/UserSelection/UserSelection.vue";
import CandidatesMaintenance from "../ui/pages/CandidatesList/CandidatesList.vue";

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
		component: AdminLogin,
	},
	{ path: "/login", name: "Login User", component: LoginUserPageVue },
	{
		path: "/election-main",
		name: "Election Main",
		component: ElectionMainPageVue,
	},
	{
		path: "/results",
		name: "Results",
		component: ResultsPageVue,
	},
	{
		path: "/login",
		name: "Login User",
		component: LoginUserPageVue,
	},
	{
		path: "/candidates-selection",
		name: "Select candidates",
		component: CandidatesSelectionVue,
	},
	{
		path: "/user-selection",
		name: "user selection",
		component: UserSelectionVue
	},{
		path: "/candidates-maintenance",
		name: "Candidates list",
		component: CandidatesMaintenance
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
