// road components
import Intro from './components/intro.vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import Main from './components/mainpage/MainPage.vue'
import Estimate from './components/estimate/estimate.vue'
import Register from './components/registerCompany/registerCompany.vue'

// Router setting
export const routes = [
  { path: '/', component: Intro },
	{ path: '/SignIn', component: SignIn },
	{ path: '/SignUp', component: SignUp },
	{ path: '/Main', component: Main },
	{ path: '/Estimate', component: Estimate },
	{ path: '/RegisterCompany', component: Register }
];