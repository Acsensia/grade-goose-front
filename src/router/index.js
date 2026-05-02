import { createRouter, createWebHistory } from 'vue-router'
import studentLogin from '@/components/login/studentLogin.vue'
import teacherLogin from '@/components/login/teacherLogin.vue'
import adminLogin from '@/components/login/adminLogin.vue'
import loginSelector from '@/components/login/loginSelector.vue'
import authTester from '@/components/login/authTester.vue'
import adminMainPage from '@/components/accountWorkflow/admin/adminMainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: loginSelector },
    { path: '/login/student', component: studentLogin },
    { path: '/login/teacher', component: teacherLogin },
    { path: '/login/admin', component: adminLogin },
    { path: '/login/test', component: authTester },
    { path: '/admin', component: adminMainPage },
  ],
})

export default router
