import { createRouter, createWebHashHistory } from "vue-router";
import loginVue from "./components/login.vue";
import HomeVue from "./components/home.vue";
import workVue from "./components/work.vue";
import forgetVue from "./components/forget.vue";


const routes = [
  {
    path: "/login",
    name: "login",
    component: loginVue,
  },
  {
    path: "/home",
    name: "home",
    component: HomeVue,
    childer:[
      // {
      //   path: "/work",
      //   name: "work",
      //   component: workVue,
      // },
    ]
  },  
  {
    path: "/work",
    name: "work",
    component: workVue,
  },
  {
    path: "/forget",
    name: "forget",
    component: forgetVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


// router.beforeEach((to,from,next) =>{
//   const token=localStorage.getItem('token')
//   if (to.name !== 'login'&& !token)
//       next ({name:'login'})

//   else next()
//   // return false
// })
export default router;