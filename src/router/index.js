import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/:id',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AddProject/:id',
    name: 'AddProject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddProject" */ '../views/AboutView.vue')
  },
  {
    path: '/AddExams',
    name: 'AddExams',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddProject" */ '../views/AddExams.vue')
  },
  {
    path: '/Exams',
    name: 'Exams',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddProject" */ '../views/Exams.vue')
  },
  {
    path: '/EditProject',
    name: 'EditProject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddProject" */ '../views/EditProject.vue'),
    props:true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
