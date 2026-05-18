<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Specialty"
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

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'name', label: 'Specialty Name', type: 'string' },
  { key: 'abbreviation', label: 'Specialty Abbreviation', type: 'string' },
  { key: 'description', label: 'Specialty Description', type: 'large-text' },
]
const actionGroups = [
  {
    name: 'Specialty Management',
    actions: [
      {
        id: 'changeName',
        label: 'Set New Specialty Name...',
        payload: { route: '/admin/manage/specialty/changeName' },
      },
      {
        id: 'changeAbbr',
        label: 'Set New Specialty Abbreviation...',
        payload: { route: '/admin/manage/specialty/changeAbbr' },
      },
      {
        id: 'changeDesc',
        label: 'Set New Group Description...',
        payload: { route: '/admin/manage/specialty/changeDesc' },
      },
    ],
  },
  {
    name: 'Specialty Assigned Entities',
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
        id: 'seeAssignedSubjects',
        label: 'See Assigned Specialties...',
        payload: { route: '/admin/manage/specialty/seeassigned/subjects' },
      },
      {
        id: 'seeAssignedStudentGroups',
        label: 'See Assigned Specialties...',
        payload: { route: '/admin/manage/specialty/seeassigned/studentgroups' },
      },
    ],
  },
  {
    name: 'Specialty Unassigned Entities',
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
        id: 'seeUnassignedSubjects',
        label: 'See Unassigned Specialties...',
        payload: { route: '/admin/manage/specialty/seeunassigned/subjects' },
      },
      {
        id: 'seeUnassignedStudentGroups',
        label: 'See Unassigned Specialties...',
        payload: { route: '/admin/manage/specialty/seeunassigned/studentgroups' },
      },
    ],
  },
]

onMounted(async () => {
  const accountInfo = await entityManagement.getSpecialtyInfo(accessTokenStore.accessToken, id)
  record.value = accountInfo
})

async function handleBackEmit() {
  await router.push('/admin/manage/specialties')
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
