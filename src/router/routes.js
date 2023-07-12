import KabanPage from './../views/KabanPage.vue';
import HomePage from '../views/HomePage.vue';
import DashBoard from '../views/DashBoard.vue';

const routes = [
  { path: '/kaban', name: 'kaban', component: KabanPage },
  { path: '/home', name: 'home', component: HomePage },
  { path: '/', name: 'Dashboard', component: DashBoard },
];

export default routes;
