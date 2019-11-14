import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Admin from './views/Admin.vue'
import Orders from './views/Orders.vue'
import AddNewItems from './components/admin/AddNewItems.vue'
import Login from './components/admin/Login.vue'
import Bottomfooter from './components/Bottomfooter.vue'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },

    {
    path: '/Bottomfooter',
    name: 'Bottomfooter',
    component: Bottomfooter
  },
   
  
    
      

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addNew',
      name: 'addNew',
      component: AddNewItems,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    },

  ]
});

//NavGuard

router.beforeEach((to, from, next) => {
const currentUser = firebase.auth().currentUser;
const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

if (requiresAuth && !currentUser) next('login');
else next();

});

export default router