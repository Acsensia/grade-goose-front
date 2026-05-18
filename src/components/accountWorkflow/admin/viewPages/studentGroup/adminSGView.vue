<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Student Group"
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
import * as entityManagement from '@/utilities/account/entityManagement'
import router from '@/router'
import { useRoute } from 'vue-router'
import DataRecordView from '@/components/accountWorkflow/shared/subComponents/dataRecordView.vue'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id
//getting optional back parameters
const backRoute = route.query.backRoute ?? false
const backId = route.query.backId ?? false

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'name', label: 'Group Name', type: 'string' },
  { key: 'description', label: 'Group Description', type: 'large-text' },
]
const actionGroups = [
  {
    name: 'Student Group Management',
    actions: [
      {
        id: 'changeName',
        label: 'Set New Group Name...',
        payload: { route: '/admin/manage/studentGroup/changeName' },
      },
      {
        id: 'changeDesc',
        label: 'Set New Group Description...',
        payload: { route: '/admin/manage/studentGroup/changeDesc' },
      },
    ],
  },
  {
    name: 'Student Group Assigned Entities',
    actions: [
      {
        id: 'seeAssignedTeachers',
        label: 'See Assigned Teachers...',
        payload: { route: '/admin/manage/studentgroup/seeassigned/teachers' },
      },
      {
        id: 'seeAssignedStudents',
        label: 'See Assigned Students...',
        payload: { route: '/admin/manage/studentgroup/seeassigned/students' },
      },
      {
        id: 'seeAssignedSpecialties',
        label: 'See Assigned Specialties...',
        payload: { route: '/admin/manage/studentgroup/seeassigned/specialties' },
      },
    ],
  },
  {
    name: 'Student Group Unassigned Entities',
    actions: [
      {
        id: 'seeUnassignedTeachers',
        label: 'See Unassigned Teachers...',
        payload: { route: '/admin/manage/studentgroup/seeunassigned/teachers' },
      },
      {
        id: 'seeUnassignedStudents',
        label: 'See Unassigned Students...',
        payload: { route: '/admin/manage/studentgroup/seeunassigned/students' },
      },
      {
        id: 'seeUnassignedSpecialties',
        label: 'See Unassigned Specialties...',
        payload: { route: '/admin/manage/studentgroup/seeunassigned/specialties' },
      },
    ],
  },
]

onMounted(async () => {
  const accountInfo = await entityManagement.getStudentGroupInfo(accessTokenStore.accessToken, id)
  record.value = accountInfo
})

async function handleBackEmit() {
  if (backRoute) {
    if (backId) await router.push({ path: backRoute, query: { id: backId } })
    else await router.push(backRoute)
  } else await router.push('/admin/manage/studentgroups')
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
