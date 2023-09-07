import {
  createRouter,
  createWebHistory
} from 'vue-router';

import Header from '../components/Header.vue';
import Index from '../pages/index.vue'
import Email from '../pages/email.vue'

const routes = [{
  path: '/Header',
  component: Header
}, {
  path: '/',
  component: Index
},{
  path:'/Email',
  component:Email
}
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;