import KabanPage from './../views/KabanPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  { path: '/kaban', name: 'kaban', component: KabanPage },
  { path: '/home', name: 'home', component: HomePage },
];

export default routes;
