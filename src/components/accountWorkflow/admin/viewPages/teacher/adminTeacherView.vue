<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Teacher"
      :record="record"
      :fields="fields"
      :action-groups="actionGroups"
      @back="handleBackEmit"
      @execute-action="handleExecuteActionEmit"
    ></DataRecordView>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import * as otherAccountManagement from '@/utilities/account/otherAccountManagement.js'
import router from '@/router'
import { useRoute } from 'vue-router'
import DataRecordView from '@/components/accountWorkflow/admin/subComponents/dataRecordView.vue'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'email', label: 'Email', type: 'string' },
  { key: 'first_name', label: 'First Name', type: 'string' },
  { key: 'last_name', label: 'Last Name', type: 'string' },
  { key: 'patronymic_name', label: 'Patronymic Name', type: 'string' },
]
const actionGroups = [
  {
    name: 'User Management',
    actions: [
      {
        id: 'changePass',
        label: 'Set New User Password...',
        payload: { route: '/admin/manage/teacher/changePass' },
      },
      {
        id: 'changeEmail',
        label: 'Change User Email...',
        payload: { route: '/admin/manage/teacher/changeEmail' },
      },
      {
        id: 'changeFName',
        label: 'Change User First Name...',
        payload: { route: '/admin/manage/teacher/changeFName' },
      },
      {
        id: 'changeLName',
        label: 'Change User Last Name...',
        payload: { route: '/admin/manage/teacher/changeLName' },
      },
      {
        id: 'changePName',
        label: 'Change User Patronymic Name...',
        payload: { route: '/admin/manage/teacher/changePName' },
      },
    ],
  },
  {
    name: 'User Assigned Entities',
    actions: [
      {
        id: 'seeAssignedStudentGroups',
        label: 'See Assigned Student Groups...',
        payload: { route: '/admin/manage/teacher/seeassigned/studentgroups' },
      },
      {
        id: 'seeAssignedSpecialties',
        label: 'See Assigned Specialties...',
        payload: { route: '/admin/manage/teacher/seeassigned/specialties' },
      },
      {
        id: 'seeAssignedSubjects',
        label: 'See Assigned Subjects...',
        payload: { route: '/admin/manage/teacher/seeassigned/subjects' },
      },
      {
        id: 'seeAssignedTasks',
        label: 'See Assigned Tasks...',
        payload: { route: '/admin/manage/teacher/seeassigned/tasks' },
      },
    ],
  },
  {
    name: 'User Unassigned Entities',
    actions: [
      {
        id: 'seeUnassignedStudentGroups',
        label: 'See Unassigned Student Groups...',
        payload: { route: '/admin/manage/teacher/seeunassigned/studentgroups' },
      },
      {
        id: 'seeUnassignedSpecialties',
        label: 'See Unassigned Specialties...',
        payload: { route: '/admin/manage/teacher/seeunassigned/specialties' },
      },
      {
        id: 'seeUnassignedSubjects',
        label: 'See Unassigned Subjects...',
        payload: { route: '/admin/manage/teacher/seeunassigned/subjects' },
      },
      {
        id: 'seeUnassignedTasks',
        label: 'See Unassigned Tasks...',
        payload: { route: '/admin/manage/teacher/seeunassigned/tasks' },
      },
    ],
  },
]

onMounted(async () => {
  const accountInfo = await otherAccountManagement.getAccountInfo(
    accessTokenStore.accessToken,
    'teacher',
    id,
  )
  record.value = accountInfo
})

async function handleBackEmit() {
  await router.push('/admin/manage/teachers')
}

async function handleExecuteActionEmit(payload) {
  await router.push({ path: payload.route, query: { id: id } })
}
</script>

<style lang="scss" scoped>
.overContainer {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  border: 1px solid var(--border-color);
  padding: 20px;
  width: 100%;
  //max-width: 400px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

button {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}
</style>
