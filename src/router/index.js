import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddMovie from '../views/AddMovie.vue'
import AppLogin from '../views/AppLogin.vue'
import AppRegister from '../views/AppRegister.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/add',
    name: 'add',
    component: AddMovie,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin,
   /*  meta: {
      guest: true
    } */
  },
  {
    path: '/register',
    name: 'Register',
    component: AppRegister,
   /*  meta: {
      guest: true
    } */
  }
]






const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem("token");

  if (isAuth && to.meta.guest) {
    return next({ name: "Home" });
  }
  if (!isAuth && to.meta.auth) {
    return next({ name: "Login" });
  }
  return next();
});


export default router
