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
    childer: [
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

// 以下为导航守卫，查看本地是否有token，没有就跳转到login,
//但只能验证有无token，不能验证token是否正确
// 之后进一步验证需要请求拦截器发送给后端验证，并且用响应拦截器保护页面
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'login' && !token)
    next({ name: 'login' },)

  else next()
  // return false
})
export default router;