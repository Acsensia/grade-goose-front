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
import AdminTeacherView from '@/components/accountWorkflow/admin/viewPages/teacher/adminTeacherView.vue'
import AdminTeacherSetNewEmail from '@/components/accountWorkflow/admin/viewPages/teacher/userManagement/adminTeacherSetNewEmail.vue'
import AdminTeacherSetNewPass from '@/components/accountWorkflow/admin/viewPages/teacher/userManagement/adminTeacherSetNewPass.vue'
import AdminTeacherSetNewFName from '@/components/accountWorkflow/admin/viewPages/teacher/userManagement/adminTeacherSetNewFName.vue'
import AdminTeacherSetNewLName from '@/components/accountWorkflow/admin/viewPages/teacher/userManagement/adminTeacherSetNewLName.vue'
import AdminTeacherSetNewPName from '@/components/accountWorkflow/admin/viewPages/teacher/userManagement/adminTeacherSetNewPName.vue'
import AdminTeacherAssignedSGManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userAssignedEntities/adminTeacherAssignedSGManagement.vue'
import AdminStudentGroupAddition from '@/components/accountWorkflow/admin/additionPages/adminStudentGroupAddition.vue'
import AdminSGManagement from '@/components/accountWorkflow/admin/managementPages/adminSGManagement.vue'
import AdminStudentAddition from '@/components/accountWorkflow/admin/additionPages/adminStudentAddition.vue'
import AdminSpecialtyAddition from '@/components/accountWorkflow/admin/additionPages/adminSpecialtyAddition.vue'
import AdminSubjectAddition from '@/components/accountWorkflow/admin/additionPages/adminSubjectAddition.vue'
import AdminTaskAddition from '@/components/accountWorkflow/admin/additionPages/adminTaskAddition.vue'
import AdminSpecialtiesManagement from '@/components/accountWorkflow/admin/managementPages/adminSpecialtiesManagement.vue'
import AdminSubjectsManagement from '@/components/accountWorkflow/admin/managementPages/adminSubjectsManagement.vue'
import AdminTasksManagement from '@/components/accountWorkflow/admin/managementPages/adminTasksManagement.vue'
import AdminStudentView from '@/components/accountWorkflow/admin/viewPages/student/adminStudentView.vue'
import AdminStudentsManagement from '@/components/accountWorkflow/admin/managementPages/adminStudentsManagement.vue'
import AdminStudentSetNewPass from '@/components/accountWorkflow/admin/viewPages/student/userManagement/adminStudentSetNewPass.vue'
import AdminStudentSetNewEmail from '@/components/accountWorkflow/admin/viewPages/student/userManagement/adminStudentSetNewEmail.vue'
import AdminStudentSetNewFName from '@/components/accountWorkflow/admin/viewPages/student/userManagement/adminStudentSetNewFName.vue'
import AdminStudentSetNewLName from '@/components/accountWorkflow/admin/viewPages/student/userManagement/adminStudentSetNewLName.vue'
import AdminStudentSetNewPName from '@/components/accountWorkflow/admin/viewPages/student/userManagement/adminStudentSetNewPName.vue'
import AdminStudentAssignedSGManagement from '@/components/accountWorkflow/admin/viewPages/student/userAssignedEntries/adminStudentAssignedSGManagement.vue'
import AdminSGView from '@/components/accountWorkflow/admin/viewPages/studentGroup/adminSGView.vue'
import AdminSpecialtyView from '@/components/accountWorkflow/admin/viewPages/specialty/adminSpecialtyView.vue'
import AdminSubjectView from '@/components/accountWorkflow/admin/viewPages/subject/adminSubjectView.vue'
import AdminTaskView from '@/components/accountWorkflow/admin/viewPages/task/adminTaskView.vue'

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
    { path: '/admin/add/student', component: AdminStudentAddition },
    { path: '/admin/add/studentgroup', component: AdminStudentGroupAddition },
    { path: '/admin/add/specialty', component: AdminSpecialtyAddition },
    { path: '/admin/add/subject', component: AdminSubjectAddition },
    { path: '/admin/add/task', component: AdminTaskAddition },

    { path: '/admin/manage', component: AdminManagementPage },
    { path: '/admin/manage/teachers', component: AdminTeachersManagement },
    { path: '/admin/manage/teacher/changePass', component: AdminTeacherSetNewPass },
    { path: '/admin/manage/teacher/changeEmail', component: AdminTeacherSetNewEmail },
    { path: '/admin/manage/teacher/changeFName', component: AdminTeacherSetNewFName },
    { path: '/admin/manage/teacher/changeLName', component: AdminTeacherSetNewLName },
    { path: '/admin/manage/teacher/changePName', component: AdminTeacherSetNewPName },

    {
      path: '/admin/manage/teacher/seeassigned/studentgroups',
      component: AdminTeacherAssignedSGManagement,
    },

    { path: '/admin/manage/students', component: AdminStudentsManagement },
    { path: '/admin/manage/student/changePass', component: AdminStudentSetNewPass },
    { path: '/admin/manage/student/changeEmail', component: AdminStudentSetNewEmail },
    { path: '/admin/manage/student/changeFName', component: AdminStudentSetNewFName },
    { path: '/admin/manage/student/changeLName', component: AdminStudentSetNewLName },
    { path: '/admin/manage/student/changePName', component: AdminStudentSetNewPName },

    {
      path: '/admin/manage/student/seeassigned/studentgroups',
      component: AdminStudentAssignedSGManagement,
    },

    { path: '/admin/manage/studentgroups', component: AdminSGManagement },

    { path: '/admin/manage/specialties', component: AdminSpecialtiesManagement },

    { path: '/admin/manage/subjects', component: AdminSubjectsManagement },

    { path: '/admin/manage/tasks', component: AdminTasksManagement },

    { path: '/admin/view/teacher', component: AdminTeacherView },
    { path: '/admin/view/student', component: AdminStudentView },
    { path: '/admin/view/studentgroup', component: AdminSGView },
    { path: '/admin/view/specialty', component: AdminSpecialtyView },
    { path: '/admin/view/subject', component: AdminSubjectView },
    { path: '/admin/view/task', component: AdminTaskView },

    { path: '/account', component: ManagementMainPage },
    { path: '/account/changePass', component: ManagementChangePass },
    { path: '/account/changeEmail', component: ManagementChangeEmail },
    { path: '/account/changeFName', component: ManagementChangeFName },
    { path: '/account/changeLName', component: ManagementChangeLName },
    { path: '/account/changePName', component: ManagementChangePName },
  ],
})

export default router
