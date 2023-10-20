import login from "./components/login.vue";
import home from "./components/homeVue/home.vue";
import work from "./components/work.vue";
import forget from "./components/forget.vue";
// import bottom from "./components/homeVue/bottom.vue";
// import top from "./components/homeVue/top.vue;
// import content from "./content.vue";
// import navigation from "./components/homeVue/navigationVue/navigation.vue";
import add_room from "./components/homeVue/navigationVue/add_room.vue"
import check_health from "./components/homeVue/navigationVue/check_health.vue"
import see_log from "./components/homeVue/navigationVue/see_log.vue"
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/home",
    name: "home",
    component: home,
    children: [
      {
        path: "add_room",
        name: "add_room",
        component: add_room,
      },
      {
        path: "see_log",
        name: "see_log",
        component: see_log,
      },
      {
        path: "check_health",
        name: "check_health",
        component: check_health,
      },
    ]
  },
  {
    path: "/work",
    name: "work",
    component: work,
  },
  {
    path: "/forget",
    name: "forget",
    component: forget,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login",
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
  // 如果不在登录页面且没有 token，跳转到登录页面
  if (to.name !== 'login' && !token) {
    next({ name: 'login' });
    console.log("导航守卫失败，跳到登录页")
  }
  // 否则允许继续路由导航
  else {
    next()
    console.log("导航守卫成功，继续")

    // return false
  }
})
export default router;