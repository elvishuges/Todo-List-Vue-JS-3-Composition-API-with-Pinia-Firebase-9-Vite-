import KabanPage from './../views/KabanPage.vue';
import HomePage from '../views/HomePage.vue';
import DashBoard from '../views/DashBoard.vue';
import MyNotes from '../views/MyNotes.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: DashBoard },
  { path: '/kaban', name: 'kaban', component: KabanPage },
  { path: '/home', name: 'home', component: HomePage },
  { path: '/notes', name: 'MyNotes', component: MyNotes },
];

export default routes;
