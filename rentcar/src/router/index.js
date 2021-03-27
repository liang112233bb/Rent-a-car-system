import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */'../views/Home.vue'),
    children: [
      {
        path: "users",
        component: () => import("../components/system/users.vue"),
      },  
      {
        path: "roles",
        component: () => import("../components/system/roles.vue"),
      },  
      {
        path: "datas",
        component: () => import("../components/system/datas.vue"),
      },  
      {
        path: "handles",
        component: () => import("../components/system/handles.vue"),
      },  
      {
        path: "discount",
        component: () => import("../components/client/discount.vue"),
      },  
      {
        path: "discountlog",
        component: () => import("../components/client/discountlog.vue"),
      },  
      {
        path: "grade",
        component: () => import("../components/client/grade.vue"),
      },  
      {
        path: "integral",
        component: () => import("../components/client/integral.vue"),
      },  
      {
        path: "members",
        component: () => import("../components/client/members.vue"),
      },  
      {
        path: "agentstores",
        component: () => import("../components/rent/agentstores.vue"),
      },  
      {
        path: "allvehicles",
        component: () => import("../components/rent/allvehicles.vue"),
      },  
      {
        path: "ordermanagement",
        component: () => import("../components/rent/ordermanagement.vue"),
      },  
      {
        path: "vehiclesbrand",
        component: () => import("../components/rent/vehiclesbrand.vue"),
      },  
      {
        path: "vehiclescommon",
        component: () => import("../components/rent/vehiclescommon.vue"),
      },  
      {
        path: "vehiclesconfig",
        component: () => import("../components/rent/vehiclesconfig.vue"),
      },  
      {
        path: "vehiclestype",
        component: () => import("../components/rent/vehiclestype.vue"),
      },  
      {
        path: "maintenanceshop",
        component: () => import("../components/maintenance/maintenanceshop.vue")
      },  
      {
        path: "maintenancelog",
        component: () => import("../components/maintenance/maintenancelog.vue")
      },  
      {
        path: "customerlogin",
        component: () => import("../components/statistics/customerlogin.vue")
      },  
      {
        path: "websiteincome",
        component: () => import("../components/statistics/websiteincome.vue")
      },  
      {
        path: "websiteconfig",
        component: () => import("../components/statistics/websiteconfig.vue")
      },  
      {
        path: "advertising",
        component: () => import("../components/marketing/advertising.vue")
      },  
      {
        path: "advertisinglocation",
        component: () => import("../components/marketing/advertisinglocation.vue")
      },  
      {
        path: "service",
        component: () => import("../components/marketing/service.vue")
      },  
      {
        path: "/",
        component: () => import("../views/Hoime.vue"),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
