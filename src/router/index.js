import { createRouter, createWebHistory } from 'vue-router';
import { useStoreAuth } from '@/store/auth';

import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const store = useStoreAuth();
  if (!store.user.id && to.name !== 'auth') {
    return { name: 'auth' };
  }
  if (store.user.id && to.name === 'auth') {
    return false;
  }
});

export default router;
