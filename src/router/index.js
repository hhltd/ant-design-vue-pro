import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/404.vue";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// 通过在components里面写Render组件来挂载router-view
// import RenderRouterView from "../components/RenderRouterView"

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    // component: RenderRouterView,
    // component: { render: h => h("router-view") },
    component: () =>
          import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register")
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      // dashboard
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis"),
          },
        ]
      },
      // form
      {
        path: "/form",
        name: "form",
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basicform",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Form/BasicForm"),
          },
          {
            path: "/form/step-form",
            name: "stepform",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Form/StepForm"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info",
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(/* webpackChunkName: "form" */ "../views/Form/StepForm/Step1"),
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(/* webpackChunkName: "form" */ "../views/Form/StepForm/Step2"),
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(/* webpackChunkName: "form" */ "../views/Form/StepForm/Step3"),
              }
            ]
          },
        ]
      },
    ]
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
