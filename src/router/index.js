import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContentLayout from '../layout/ContentLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ContentLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
