import KabanPage from './../views/KabanPage.vue';
import HomePage from '../views/HomePage.vue';
import DashBoard from '../views/DashBoard.vue';
import MyNotes from '../views/MyNotes.vue';
import EditNote from '../views/EditNote.vue';
import ViewAuth from '../views/ViewAuth.vue';

const routes = [
  { path: '/', name: 'dashboard', component: DashBoard },
  { path: '/kaban', name: 'kaban', component: KabanPage },
  { path: '/home', name: 'home', component: HomePage },
  { path: '/notes', name: 'notes', component: MyNotes },
  { path: '/edit-note/:id', name: 'editNote', component: EditNote },
  { path: '/auth', name: 'auth', component: ViewAuth },
];

export default routes;
