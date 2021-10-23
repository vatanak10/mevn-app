import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import TasksAll from '../views/tasks/TasksAll.vue'
import TasksCreate from '../views/tasks/TasksCreate.vue'
import TasksEdit from '../views/tasks/TasksEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/tasks',
    name: 'all-tasks',
    component: TasksAll
  },
  {
    path: '/tasks/new',
    name: 'create-task',
    component: TasksCreate
  },
  {
    path: '/tasks/:id',
    name: 'edit-task',
    component: TasksEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "exact-active"
})

export default router
