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
import AdminTeacherAssignedSPManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userAssignedEntities/adminTeacherAssignedSPManagement.vue'
import AdminStudentAssignedSPManagement from '@/components/accountWorkflow/admin/viewPages/student/userAssignedEntries/adminStudentAssignedSPManagement.vue'
import AdminTeacherAssignedSJManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userAssignedEntities/adminTeacherAssignedSJManagement.vue'
import AdminStudentAssignedSJManagement from '@/components/accountWorkflow/admin/viewPages/student/userAssignedEntries/adminStudentAssignedSJManagement.vue'
import AdminTeacherAssignedTSManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userAssignedEntities/adminTeacherAssignedTSManagement.vue'
import AdminStudentAssignedTSManagement from '@/components/accountWorkflow/admin/viewPages/student/userAssignedEntries/adminStudentAssignedTSManagement.vue'
import AdminStudentUnassignedSGManagement from '@/components/accountWorkflow/admin/viewPages/student/userUnassignedEntities/adminStudentUnassignedSGManagement.vue'
import AdminTeacherUnassignedSGManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userUnassignedEntities/adminTeacherUnassignedSGManagement.vue'
import AdminTeacherUnassignedSPManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userUnassignedEntities/adminTeacherUnassignedSPManagement.vue'
import AdminTeacherUnassignedSJManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userUnassignedEntities/adminTeacherUnassignedSJManagement.vue'
import AdminTeacherUnassignedTSManagement from '@/components/accountWorkflow/admin/viewPages/teacher/userUnassignedEntities/adminTeacherUnassignedTSManagement.vue'
import AdminStudentUnassignedSPManagement from '@/components/accountWorkflow/admin/viewPages/student/userUnassignedEntities/adminStudentUnassignedSPManagement.vue'
import AdminStudentUnassignedSJManagement from '@/components/accountWorkflow/admin/viewPages/student/userUnassignedEntities/adminStudentUnassignedSJManagement.vue'
import AdminStudentUnassignedTSManagement from '@/components/accountWorkflow/admin/viewPages/student/userUnassignedEntities/adminStudentUnassignedTSManagement.vue'
import AdminSGSetNewName from '@/components/accountWorkflow/admin/viewPages/studentGroup/entityManagement/adminSGSetNewName.vue'
import AdminSGSetNewDesc from '@/components/accountWorkflow/admin/viewPages/studentGroup/entityManagement/adminSGSetNewDesc.vue'
import AdminSJSetNewName from '@/components/accountWorkflow/admin/viewPages/subject/entityManagement/adminSJSetNewName.vue'
import AdminSJSetNewDesc from '@/components/accountWorkflow/admin/viewPages/subject/entityManagement/adminSJSetNewDesc.vue'
import AdminSPSetNewName from '@/components/accountWorkflow/admin/viewPages/specialty/entityManagement/adminSPSetNewName.vue'
import AdminSPSetNewDesc from '@/components/accountWorkflow/admin/viewPages/specialty/entityManagement/adminSPSetNewDesc.vue'
import AdminSPSetNewAbbr from '@/components/accountWorkflow/admin/viewPages/specialty/entityManagement/adminSPSetNewAbbr.vue'
import AdminTSSetNewName from '@/components/accountWorkflow/admin/viewPages/task/entityManagement/adminTSSetNewName.vue'
import AdminTSSetNewDue from '@/components/accountWorkflow/admin/viewPages/task/entityManagement/adminTSSetNewDue.vue'
import AdminTSSetEnforceDue from '@/components/accountWorkflow/admin/viewPages/task/entityManagement/adminTSSetEnforceDue.vue'
import AdminTSSetNewInstr from '@/components/accountWorkflow/admin/viewPages/task/entityManagement/adminTSSetNewInstr.vue'
import AdminSGAssignedTEManagement from '@/components/accountWorkflow/admin/viewPages/studentGroup/assignedEntities/adminSGAssignedTEManagement.vue'
import AdminSGAssignedSTManagement from '@/components/accountWorkflow/admin/viewPages/studentGroup/assignedEntities/adminSGAssignedSTManagement.vue'
import AdminSGAssignedSPManagement from '@/components/accountWorkflow/admin/viewPages/studentGroup/assignedEntities/adminSGAssignedSPManagement.vue'
import AdminSGUnassignedTEManagement from '@/components/accountWorkflow/admin/viewPages/studentGroup/unassignedEntities/adminSGUnassignedTEManagement.vue'
import AdminSGUnassignedSTManagement from '@/components/accountWorkflow/admin/viewPages/studentGroup/unassignedEntities/adminSGUnassignedSTManagement.vue'
import AdminSGUnassignedSPManagement from '@/components/accountWorkflow/admin/viewPages/studentGroup/unassignedEntities/adminSGUnassignedSPManagement.vue'
import AdminSPAssignedTEManagement from '@/components/accountWorkflow/admin/viewPages/specialty/assignedEntries/adminSPAssignedTEManagement.vue'
import AdminSPAssignedSTManagement from '@/components/accountWorkflow/admin/viewPages/specialty/assignedEntries/adminSPAssignedSTManagement.vue'
import AdminSPAssignedSGManagement from '@/components/accountWorkflow/admin/viewPages/specialty/assignedEntries/adminSPAssignedSGManagement.vue'
import AdminSPAssignedSJManagement from '@/components/accountWorkflow/admin/viewPages/specialty/assignedEntries/adminSPAssignedSJManagement.vue'
import AdminSPUnassignedTEManagement from '@/components/accountWorkflow/admin/viewPages/specialty/unassignedEntries/adminSPUnassignedTEManagement.vue'
import AdminSPUnassignedSTManagement from '@/components/accountWorkflow/admin/viewPages/specialty/unassignedEntries/adminSPUnassignedSTManagement.vue'
import AdminSPUnassignedSGManagement from '@/components/accountWorkflow/admin/viewPages/specialty/unassignedEntries/adminSPUnassignedSGManagement.vue'
import AdminSPUnassignedSJManagement from '@/components/accountWorkflow/admin/viewPages/specialty/unassignedEntries/adminSPUnassignedSJManagement.vue'
import AdminSJAssignedTEManagement from '@/components/accountWorkflow/admin/viewPages/subject/assignedEntities/adminSJAssignedTEManagement.vue'
import AdminSJAssignedSTManagement from '@/components/accountWorkflow/admin/viewPages/subject/assignedEntities/adminSJAssignedSTManagement.vue'
import AdminSJAssignedSPManagement from '@/components/accountWorkflow/admin/viewPages/subject/assignedEntities/adminSJAssignedSPManagement.vue'
import AdminSJAssignedTSManagement from '@/components/accountWorkflow/admin/viewPages/subject/assignedEntities/adminSJAssignedTSManagement.vue'
import AdminSJUnassignedTEManagement from '@/components/accountWorkflow/admin/viewPages/subject/unassignedEntities/adminSJUnassignedTEManagement.vue'
import AdminSJUnassignedSTManagement from '@/components/accountWorkflow/admin/viewPages/subject/unassignedEntities/adminSJUnassignedSTManagement.vue'
import AdminSJUnassignedSPManagement from '@/components/accountWorkflow/admin/viewPages/subject/unassignedEntities/adminSJUnassignedSPManagement.vue'
import AdminSJUnassignedTSManagement from '@/components/accountWorkflow/admin/viewPages/subject/unassignedEntities/adminSJUnassignedTSManagement.vue'
import AdminTSAssignedTEManagement from '@/components/accountWorkflow/admin/viewPages/task/assignedEntities/adminTSAssignedTEManagement.vue'
import AdminTSAssignedSTManagement from '@/components/accountWorkflow/admin/viewPages/task/assignedEntities/adminTSAssignedSTManagement.vue'
import AdminTSAssignedSBManagement from '@/components/accountWorkflow/admin/viewPages/task/assignedEntities/adminTSAssignedSBManagement.vue'
import AdminTSUnassignedTEManagement from '@/components/accountWorkflow/admin/viewPages/task/unassignedEntities/adminTSUnassignedTEManagement.vue'
import AdminTSUnassignedSTManagement from '@/components/accountWorkflow/admin/viewPages/task/unassignedEntities/adminTSUnassignedSTManagement.vue'
import AdminTSUnassignedSBManagement from '@/components/accountWorkflow/admin/viewPages/task/unassignedEntities/adminTSUnassignedSBManagement.vue'
import TeacherMainPage from '@/components/accountWorkflow/teacher/teacherMainPage.vue'
import TeacherTaskAddition from '@/components/accountWorkflow/teacher/additionPages/teacherTaskAddition.vue'
import TeacherTasksManagement from '@/components/accountWorkflow/teacher/managementPages/teacherTasksManagement.vue'
import TeacherAssignedSGManagement from '@/components/accountWorkflow/teacher/managementPages/assigned/teacherAssignedSGManagement.vue'
import TeacherAssignedSPManagement from '@/components/accountWorkflow/teacher/managementPages/assigned/teacherAssignedSPManagement.vue'
import TeacherAssignedSJManagement from '@/components/accountWorkflow/teacher/managementPages/assigned/teacherAssignedSJManagement.vue'
import TeacherAssignedTSManagement from '@/components/accountWorkflow/teacher/managementPages/assigned/teacherAssignedTSManagement.vue'
import TeacherSTView from '@/components/accountWorkflow/teacher/viewPages/student/teacherSTView.vue'
import TeacherSGView from '@/components/accountWorkflow/teacher/viewPages/studentGroup/teacherSGView.vue'
import TeacherSPView from '@/components/accountWorkflow/teacher/viewPages/specialty/teacherSPView.vue'
import TeacherSJView from '@/components/accountWorkflow/teacher/viewPages/subject/teacherSJView.vue'
import TeacherTSView from '@/components/accountWorkflow/teacher/viewPages/task/teacherTSView.vue'
import TeacherSPAssignedSTManagement from '@/components/accountWorkflow/teacher/viewPages/specialty/assignedEntities/teacherSPAssignedSTManagement.vue'
import TeacherSPAssignedSJManagement from '@/components/accountWorkflow/teacher/viewPages/specialty/assignedEntities/teacherSPAssignedSJManagement.vue'
import TeacherSGAssignedSTManagement from '@/components/accountWorkflow/teacher/viewPages/studentGroup/assignedEntities/teacherSGAssignedSTManagement.vue'
import TeacherSGAssignedSPManagement from '@/components/accountWorkflow/teacher/viewPages/studentGroup/assignedEntities/teacherSGAssignedSPManagement.vue'
import TeacherSJAssignedSTManagement from '@/components/accountWorkflow/teacher/viewPages/subject/assignedEntities/teacherSJAssignedSTManagement.vue'
import TeacherSJAssignedTSManagement from '@/components/accountWorkflow/teacher/viewPages/subject/assignedEntities/teacherSJAssignedTSManagement.vue'
import TeacherSJUnassignedTSManagement from '@/components/accountWorkflow/teacher/viewPages/subject/unassignedEntities/teacherSJUnassignedTSManagement.vue'
import TeacherSTAssignedTSManagement from '@/components/accountWorkflow/teacher/viewPages/student/assignedEntities/teacherSTAssignedTSManagement.vue'
import TeacherSTUnassignedTSManagement from '@/components/accountWorkflow/teacher/viewPages/student/unassignedEntities/teacherSTUnassignedTSManagement.vue'
import TeacherTSSetNewName from '@/components/accountWorkflow/teacher/viewPages/task/entityManagement/teacherTSSetNewName.vue'
import TeacherTSSetNewInstr from '@/components/accountWorkflow/teacher/viewPages/task/entityManagement/teacherTSSetNewInstr.vue'
import TeacherTSSetNewDue from '@/components/accountWorkflow/teacher/viewPages/task/entityManagement/teacherTSSetNewDue.vue'
import TeacherTSSetEnforceDue from '@/components/accountWorkflow/teacher/viewPages/task/entityManagement/teacherTSSetEnforceDue.vue'
import AdminSLManagement from '@/components/accountWorkflow/admin/managementPages/adminSLManagement.vue'
import AdminSolutionAddition from '@/components/accountWorkflow/admin/additionPages/adminSolutionAddition.vue'
import AdminSolutionView from '@/components/accountWorkflow/admin/viewPages/solution/adminSolutionView.vue'
import AdminSLSetNewLink from '@/components/accountWorkflow/admin/viewPages/solution/entityManagement/adminSLSetNewLink.vue'
import AdminSLSetNewMark from '@/components/accountWorkflow/admin/viewPages/solution/entityManagement/adminSLSetNewMark.vue'
import AdminSLSetNewStComm from '@/components/accountWorkflow/admin/viewPages/solution/entityManagement/adminSLSetNewStComm.vue'
import AdminSLSetNewTeComm from '@/components/accountWorkflow/admin/viewPages/solution/entityManagement/adminSLSetNewTeComm.vue'
import AdminSJMarkedSLManagement from '@/components/accountWorkflow/admin/viewPages/subject/solutionsManagement/adminSJMarkedSLManagement.vue'
import AdminSJUnmarkedSLManagement from '@/components/accountWorkflow/admin/viewPages/subject/solutionsManagement/adminSJUnmarkedSLManagement.vue'
import AdminSTMarkedSLManagement from '@/components/accountWorkflow/admin/viewPages/student/solutionsManagement/adminSTMarkedSLManagement.vue'
import AdminSTUnmarkedSLManagement from '@/components/accountWorkflow/admin/viewPages/student/solutionsManagement/adminSTUnmarkedSLManagement.vue'
import TeacherSJMarkedSLManagement from '@/components/accountWorkflow/teacher/viewPages/subject/solutionsManagement/teacherSJMarkedSLManagement.vue'
import TeacherSJUnmarkedSLManagement from '@/components/accountWorkflow/teacher/viewPages/subject/solutionsManagement/teacherSJUnmarkedSLManagement.vue'
import TeacherSTMarkedSLManagement from '@/components/accountWorkflow/teacher/viewPages/student/solutionsManagement/teacherSTMarkedSLManagement.vue'
import TeacherSTUnmarkedSLManagement from '@/components/accountWorkflow/teacher/viewPages/student/solutionsManagement/teacherSTUnmarkedSLManagement.vue'
import TeacherSolutionView from '@/components/accountWorkflow/teacher/viewPages/solution/teacherSolutionView.vue'
import TeacherSLSetNewMark from '@/components/accountWorkflow/teacher/viewPages/solution/entityManagement/teacherSLSetNewMark.vue'
import TeacherSLSetNewTeComm from '@/components/accountWorkflow/teacher/viewPages/solution/entityManagement/teacherSLSetNewTeComm.vue'
import StudentMainPage from '@/components/accountWorkflow/student/studentMainPage.vue'
import StudentAssignedSGManagement from '@/components/accountWorkflow/student/managementPages/assigned/studentAssignedSGManagement.vue'
import StudentAssignedSPManagement from '@/components/accountWorkflow/student/managementPages/assigned/studentAssignedSPManagement.vue'
import StudentAssignedSJManagement from '@/components/accountWorkflow/student/managementPages/assigned/studentAssignedSJManagement.vue'
import StudentAssignedTSManagement from '@/components/accountWorkflow/student/managementPages/assigned/studentAssignedTSManagement.vue'
import StudentSLAddition from '@/components/accountWorkflow/student/additionPages/studentSLAddition.vue'
import StudentSGView from '@/components/accountWorkflow/student/viewPages/studentGroup/studentSGView.vue'
import StudentSPView from '@/components/accountWorkflow/student/viewPages/specialty/studentSPView.vue'
import StudentSJView from '@/components/accountWorkflow/student/viewPages/subject/studentSJView.vue'
import StudentTSView from '@/components/accountWorkflow/student/viewPages/task/studentTSView.vue'
import StudentSLView from '@/components/accountWorkflow/student/viewPages/solution/studentSLView.vue'
import StudentSLSetNewLink from '@/components/accountWorkflow/student/viewPages/solution/entityManagement/studentSLSetNewLink.vue'
import StudentSLSetNewStComm from '@/components/accountWorkflow/student/viewPages/solution/entityManagement/studentSLSetNewStComm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: loginSelector },
    { path: '/login/student', component: studentLogin },
    { path: '/login/teacher', component: teacherLogin },
    { path: '/login/admin', component: adminLogin },
    { path: '/login/test', component: authTester },

    { path: '/student', component: StudentMainPage },
    { path: '/student/add/solution', component: StudentSLAddition },

    { path: '/student/manage/assigned/studentgroups', component: StudentAssignedSGManagement },
    { path: '/student/manage/assigned/specialties', component: StudentAssignedSPManagement },
    { path: '/student/manage/assigned/subjects', component: StudentAssignedSJManagement },
    { path: '/student/manage/assigned/tasks', component: StudentAssignedTSManagement },

    // ???
    { path: '/student/manage/solution/changeLink', component: StudentSLSetNewLink },
    { path: '/student/manage/solution/changeStComm', component: StudentSLSetNewStComm },

    { path: '/student/view/studentgroup', component: StudentSGView },
    { path: '/student/view/specialty', component: StudentSPView },
    { path: '/student/view/subject', component: StudentSJView },
    { path: '/student/view/task', component: StudentTSView },
    { path: '/student/view/solution', component: StudentSLView },

    { path: '/teacher', component: TeacherMainPage },
    { path: '/teacher/add/task', component: TeacherTaskAddition },

    { path: '/teacher/manage/tasks', component: TeacherTasksManagement },

    { path: '/teacher/manage/assigned/studentgroups', component: TeacherAssignedSGManagement },

    {
      path: '/teacher/manage/assigned/studentgroup/seeassigned/students',
      component: TeacherSGAssignedSTManagement,
    },
    {
      path: '/teacher/manage/assigned/studentgroup/seeassigned/specialties',
      component: TeacherSGAssignedSPManagement,
    },

    { path: '/teacher/manage/assigned/specialties', component: TeacherAssignedSPManagement },

    {
      path: '/teacher/manage/assigned/specialty/seeassigned/students',
      component: TeacherSPAssignedSTManagement,
    },
    {
      path: '/teacher/manage/assigned/specialty/seeassigned/subjects',
      component: TeacherSPAssignedSJManagement,
    },

    { path: '/teacher/manage/assigned/subjects', component: TeacherAssignedSJManagement },

    {
      path: '/teacher/manage/assigned/subject/seeassigned/students',
      component: TeacherSJAssignedSTManagement,
    },
    {
      path: '/teacher/manage/assigned/subject/seeassigned/tasks',
      component: TeacherSJAssignedTSManagement,
    },

    {
      path: '/teacher/manage/assigned/subject/seeunassigned/tasks',
      component: TeacherSJUnassignedTSManagement,
    },

    {
      path: '/teacher/manage/assigned/subject/seemarked/solutions',
      component: TeacherSJMarkedSLManagement,
    },
    {
      path: '/teacher/manage/assigned/subject/seeunmarked/solutions',
      component: TeacherSJUnmarkedSLManagement,
    },

    //???

    {
      path: '/teacher/manage/assigned/student/seeassigned/tasks',
      component: TeacherSTAssignedTSManagement,
    },

    {
      path: '/teacher/manage/assigned/student/seeunassigned/tasks',
      component: TeacherSTUnassignedTSManagement,
    },

    {
      path: '/teacher/manage/assigned/student/seemarked/solutions',
      component: TeacherSTMarkedSLManagement,
    },
    {
      path: '/teacher/manage/assigned/student/seeunmarked/solutions',
      component: TeacherSTUnmarkedSLManagement,
    },

    //???

    { path: '/teacher/manage/solution/changeMark', component: TeacherSLSetNewMark },
    { path: '/teacher/manage/solution/changeTeComm', component: TeacherSLSetNewTeComm },

    { path: '/teacher/manage/assigned/tasks', component: TeacherAssignedTSManagement },
    { path: '/teacher/manage/task/changeName', component: TeacherTSSetNewName },
    { path: '/teacher/manage/task/changeInstr', component: TeacherTSSetNewInstr },
    { path: '/teacher/manage/task/changeTimeDue', component: TeacherTSSetNewDue },
    { path: '/teacher/manage/task/changePDEnforcement', component: TeacherTSSetEnforceDue },

    { path: '/teacher/view/student', component: TeacherSTView },
    { path: '/teacher/view/studentgroup', component: TeacherSGView },
    { path: '/teacher/view/specialty', component: TeacherSPView },
    { path: '/teacher/view/subject', component: TeacherSJView },
    { path: '/teacher/view/task', component: TeacherTSView },
    { path: '/teacher/view/solution', component: TeacherSolutionView },

    { path: '/admin', component: adminMainPage },
    { path: '/admin/add', component: AdminAdditionPage },
    { path: '/admin/add/teacher', component: AdminTeacherAddition },
    { path: '/admin/add/student', component: AdminStudentAddition },
    { path: '/admin/add/studentgroup', component: AdminStudentGroupAddition },
    { path: '/admin/add/specialty', component: AdminSpecialtyAddition },
    { path: '/admin/add/subject', component: AdminSubjectAddition },
    { path: '/admin/add/task', component: AdminTaskAddition },
    { path: '/admin/add/solution', component: AdminSolutionAddition },

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
    {
      path: '/admin/manage/teacher/seeassigned/specialties',
      component: AdminTeacherAssignedSPManagement,
    },
    {
      path: '/admin/manage/teacher/seeassigned/subjects',
      component: AdminTeacherAssignedSJManagement,
    },
    {
      path: '/admin/manage/teacher/seeassigned/tasks',
      component: AdminTeacherAssignedTSManagement,
    },

    {
      path: '/admin/manage/teacher/seeunassigned/studentgroups',
      component: AdminTeacherUnassignedSGManagement,
    },
    {
      path: '/admin/manage/teacher/seeunassigned/specialties',
      component: AdminTeacherUnassignedSPManagement,
    },
    {
      path: '/admin/manage/teacher/seeunassigned/subjects',
      component: AdminTeacherUnassignedSJManagement,
    },
    {
      path: '/admin/manage/teacher/seeunassigned/tasks',
      component: AdminTeacherUnassignedTSManagement,
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
    {
      path: '/admin/manage/student/seeassigned/specialties',
      component: AdminStudentAssignedSPManagement,
    },
    {
      path: '/admin/manage/student/seeassigned/subjects',
      component: AdminStudentAssignedSJManagement,
    },
    {
      path: '/admin/manage/student/seeassigned/tasks',
      component: AdminStudentAssignedTSManagement,
    },

    {
      path: '/admin/manage/student/seeunassigned/studentgroups',
      component: AdminStudentUnassignedSGManagement,
    },
    {
      path: '/admin/manage/student/seeunassigned/specialties',
      component: AdminStudentUnassignedSPManagement,
    },
    {
      path: '/admin/manage/student/seeunassigned/subjects',
      component: AdminStudentUnassignedSJManagement,
    },
    {
      path: '/admin/manage/student/seeunassigned/tasks',
      component: AdminStudentUnassignedTSManagement,
    },

    {
      path: '/admin/manage/student/seemarked/solutions',
      component: AdminSTMarkedSLManagement,
    },
    {
      path: '/admin/manage/student/seeunmarked/solutions',
      component: AdminSTUnmarkedSLManagement,
    },

    { path: '/admin/manage/studentgroups', component: AdminSGManagement },
    { path: '/admin/manage/studentgroup/changeName', component: AdminSGSetNewName },
    { path: '/admin/manage/studentgroup/changeDesc', component: AdminSGSetNewDesc },

    {
      path: '/admin/manage/studentgroup/seeassigned/teachers',
      component: AdminSGAssignedTEManagement,
    },
    {
      path: '/admin/manage/studentgroup/seeassigned/students',
      component: AdminSGAssignedSTManagement,
    },
    {
      path: '/admin/manage/studentgroup/seeassigned/specialties',
      component: AdminSGAssignedSPManagement,
    },

    {
      path: '/admin/manage/studentgroup/seeunassigned/teachers',
      component: AdminSGUnassignedTEManagement,
    },
    {
      path: '/admin/manage/studentgroup/seeunassigned/students',
      component: AdminSGUnassignedSTManagement,
    },
    {
      path: '/admin/manage/studentgroup/seeunassigned/specialties',
      component: AdminSGUnassignedSPManagement,
    },

    { path: '/admin/manage/specialties', component: AdminSpecialtiesManagement },
    { path: '/admin/manage/specialty/changeName', component: AdminSPSetNewName },
    { path: '/admin/manage/specialty/changeAbbr', component: AdminSPSetNewAbbr },
    { path: '/admin/manage/specialty/changeDesc', component: AdminSPSetNewDesc },

    {
      path: '/admin/manage/specialty/seeassigned/teachers',
      component: AdminSPAssignedTEManagement,
    },
    {
      path: '/admin/manage/specialty/seeassigned/students',
      component: AdminSPAssignedSTManagement,
    },
    {
      path: '/admin/manage/specialty/seeassigned/studentgroups',
      component: AdminSPAssignedSGManagement,
    },
    {
      path: '/admin/manage/specialty/seeassigned/subjects',
      component: AdminSPAssignedSJManagement,
    },

    {
      path: '/admin/manage/specialty/seeunassigned/teachers',
      component: AdminSPUnassignedTEManagement,
    },
    {
      path: '/admin/manage/specialty/seeunassigned/students',
      component: AdminSPUnassignedSTManagement,
    },
    {
      path: '/admin/manage/specialty/seeunassigned/studentgroups',
      component: AdminSPUnassignedSGManagement,
    },
    {
      path: '/admin/manage/specialty/seeunassigned/subjects',
      component: AdminSPUnassignedSJManagement,
    },

    { path: '/admin/manage/subjects', component: AdminSubjectsManagement },
    { path: '/admin/manage/subject/changeName', component: AdminSJSetNewName },
    { path: '/admin/manage/subject/changeDesc', component: AdminSJSetNewDesc },

    {
      path: '/admin/manage/subject/seeassigned/teachers',
      component: AdminSJAssignedTEManagement,
    },
    {
      path: '/admin/manage/subject/seeassigned/students',
      component: AdminSJAssignedSTManagement,
    },
    {
      path: '/admin/manage/subject/seeassigned/specialties',
      component: AdminSJAssignedSPManagement,
    },
    {
      path: '/admin/manage/subject/seeassigned/tasks',
      component: AdminSJAssignedTSManagement,
    },

    {
      path: '/admin/manage/subject/seeunassigned/teachers',
      component: AdminSJUnassignedTEManagement,
    },
    {
      path: '/admin/manage/subject/seeunassigned/students',
      component: AdminSJUnassignedSTManagement,
    },
    {
      path: '/admin/manage/subject/seeunassigned/specialties',
      component: AdminSJUnassignedSPManagement,
    },
    {
      path: '/admin/manage/subject/seeunassigned/tasks',
      component: AdminSJUnassignedTSManagement,
    },

    {
      path: '/admin/manage/subject/seemarked/solutions',
      component: AdminSJMarkedSLManagement,
    },
    {
      path: '/admin/manage/subject/seeunmarked/solutions',
      component: AdminSJUnmarkedSLManagement,
    },

    { path: '/admin/manage/tasks', component: AdminTasksManagement },
    { path: '/admin/manage/task/changeName', component: AdminTSSetNewName },
    { path: '/admin/manage/task/changeInstr', component: AdminTSSetNewInstr },
    { path: '/admin/manage/task/changeTimeDue', component: AdminTSSetNewDue },
    { path: '/admin/manage/task/changePDEnforcement', component: AdminTSSetEnforceDue },

    {
      path: '/admin/manage/task/seeassigned/teachers',
      component: AdminTSAssignedTEManagement,
    },
    {
      path: '/admin/manage/task/seeassigned/students',
      component: AdminTSAssignedSTManagement,
    },
    {
      path: '/admin/manage/task/seeassigned/subjects',
      component: AdminTSAssignedSBManagement,
    },

    {
      path: '/admin/manage/task/seeunassigned/teachers',
      component: AdminTSUnassignedTEManagement,
    },
    {
      path: '/admin/manage/task/seeunassigned/students',
      component: AdminTSUnassignedSTManagement,
    },
    {
      path: '/admin/manage/task/seeunassigned/subjects',
      component: AdminTSUnassignedSBManagement,
    },

    { path: '/admin/manage/solutions', component: AdminSLManagement },
    { path: '/admin/manage/solution/changeLink', component: AdminSLSetNewLink },
    { path: '/admin/manage/solution/changeMark', component: AdminSLSetNewMark },
    { path: '/admin/manage/solution/changeStComm', component: AdminSLSetNewStComm },
    { path: '/admin/manage/solution/changeTeComm', component: AdminSLSetNewTeComm },

    { path: '/admin/view/teacher', component: AdminTeacherView },
    { path: '/admin/view/student', component: AdminStudentView },
    { path: '/admin/view/studentgroup', component: AdminSGView },
    { path: '/admin/view/specialty', component: AdminSpecialtyView },
    { path: '/admin/view/subject', component: AdminSubjectView },
    { path: '/admin/view/task', component: AdminTaskView },
    { path: '/admin/view/solution', component: AdminSolutionView },

    { path: '/account', component: ManagementMainPage },
    { path: '/account/changePass', component: ManagementChangePass },
    { path: '/account/changeEmail', component: ManagementChangeEmail },
    { path: '/account/changeFName', component: ManagementChangeFName },
    { path: '/account/changeLName', component: ManagementChangeLName },
    { path: '/account/changePName', component: ManagementChangePName },
  ],
})

export default router
