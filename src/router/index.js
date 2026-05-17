import { createRouter, createWebHistory } from 'vue-router'
import studentLogin from '@/components/login/studentLogin.vue'
import teacherLogin from '@/components/login/teacherLogin.vue'
import adminLogin from '@/components/login/adminLogin.vue'
import loginSelector from '@/components/login/loginSelector.vue'
import authTester from '@/components/login/authTester.vue'
import adminMainPage from '@/components/accountWorkflow/admin/adminMainPage.vue'
import ManagementMainPage from '@/components/accountWorkflow/shared/accountManagement/managementMainPage.vue'
import ManagementChangePass from '@/components/accountWorkflow/shared/accountManagement/managementChangePass.vue'
import ManagementChangeEmail from '@/components/accountWorkflow/shared/accountManagement/managementChangeEmail.vue'
import ManagementChangeFName from '@/components/accountWorkflow/shared/accountManagement/managementChangeFName.vue'
import ManagementChangeLName from '@/components/accountWorkflow/shared/accountManagement/managementChangeLName.vue'
import ManagementChangePName from '@/components/accountWorkflow/shared/accountManagement/managementChangePName.vue'
import AdminTeachersManagement from '@/components/accountWorkflow/admin/managementPages/adminTeachersManagement.vue'
import AdminManagementPage from '@/components/accountWorkflow/admin/adminManagementPage.vue'
import AdminAdditionPage from '@/components/accountWorkflow/admin/adminAdditionPage.vue'
import AdminTeacherAddition from '@/components/accountWorkflow/admin/additionPages/adminTeacherAddition.vue'
import AdminTeacherView from '@/components/accountWorkflow/admin/viewPages/adminTeacherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: loginSelector },
    { path: '/login/student', component: studentLogin },
    { path: '/login/teacher', component: teacherLogin },
    { path: '/login/admin', component: adminLogin },
    { path: '/login/test', component: authTester },
    { path: '/admin', component: adminMainPage },
    { path: '/admin/add', component: AdminAdditionPage },
    { path: '/admin/add/teacher', component: AdminTeacherAddition },
    { path: '/admin/manage', component: AdminManagementPage },
    { path: '/admin/manage/teachers', component: AdminTeachersManagement },
    { path: '/admin/view/teacher', component: AdminTeacherView },
    { path: '/account', component: ManagementMainPage },
    { path: '/account/changePass', component: ManagementChangePass },
    { path: '/account/changeEmail', component: ManagementChangeEmail },
    { path: '/account/changeFName', component: ManagementChangeFName },
    { path: '/account/changeLName', component: ManagementChangeLName },
    { path: '/account/changePName', component: ManagementChangePName },
  ],
})

export default router
