import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,

  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Royal Brothers"
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      meta: {
        title: "Sign Up | Royal Brothers"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "Log In | Royal Brothers"
      }
    }
  ]
});
//  Change Page Title based on route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
