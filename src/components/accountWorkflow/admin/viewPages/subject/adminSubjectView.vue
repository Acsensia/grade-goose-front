<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Subject"
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
// const id2 = route.query.id2
//getting optional back parameters
const backRoute = route.query.backRoute ?? false
const backId = route.query.backId ?? false
const backId2 = route.query.backId2 ?? false

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'name', label: 'Subject Name', type: 'string' },
  { key: 'description', label: 'Subject Description', type: 'large-text' },
]
const actionGroups = [
  {
    name: 'Subject Management',
    actions: [
      {
        id: 'changeName',
        label: 'Set New Subject Name...',
        payload: { route: '/admin/manage/subject/changeName' },
      },
      {
        id: 'changeDesc',
        label: 'Set New Subject Description...',
        payload: { route: '/admin/manage/subject/changeDesc' },
      },
    ],
  },
  {
    name: 'Subject Assigned Entities',
    actions: [
      {
        id: 'seeAssignedTeachers',
        label: 'See Assigned Teachers...',
        payload: { route: '/admin/manage/subject/seeassigned/teachers' },
      },
      {
        id: 'seeAssignedStudents',
        label: 'See Assigned Students...',
        payload: { route: '/admin/manage/subject/seeassigned/students' },
      },
      {
        id: 'seeAssignedTasks',
        label: 'See Assigned Tasks...',
        payload: { route: '/admin/manage/subject/seeassigned/tasks' },
      },
      {
        id: 'seeAssignedSpecialties',
        label: 'See Assigned Specialties...',
        payload: { route: '/admin/manage/subject/seeassigned/specialties' },
      },
    ],
  },
  {
    name: 'Subject Unassigned Entities',
    actions: [
      {
        id: 'seeUnassignedTeachers',
        label: 'See Unassigned Teachers...',
        payload: { route: '/admin/manage/subject/seeunassigned/teachers' },
      },
      {
        id: 'seeUnassignedStudents',
        label: 'See Unassigned Students...',
        payload: { route: '/admin/manage/subject/seeunassigned/students' },
      },
      {
        id: 'seeUnassignedTasks',
        label: 'See Unassigned Tasks...',
        payload: { route: '/admin/manage/subject/seeunassigned/tasks' },
      },
      {
        id: 'seeUnassignedSpecialties',
        label: 'See Unassigned Specialties...',
        payload: { route: '/admin/manage/subject/seeunassigned/specialties' },
      },
    ],
  },
  {
    name: 'Subject Solutions Management',
    actions: [
      {
        id: 'seeMarkedSolutions',
        label: 'See Marked Solutions...',
        payload: { route: '/admin/manage/subject/seemarked/solutions' },
      },
      {
        id: 'seeUnmarkedSolutions',
        label: 'See Unmarked Solutions...',
        payload: { route: '/admin/manage/subject/seeunmarked/solutions' },
      },
    ],
  },
]

onMounted(async () => {
  const entityInfo = await entityManagement.getSubjectInfo(accessTokenStore.accessToken, id)
  record.value = entityInfo
})

async function handleBackEmit() {
  if (backRoute) {
    if (backId) {
      if (backId2) {
        await router.push({ path: backRoute, query: { id: backId, id2: backId2 } })
      } else await router.push({ path: backRoute, query: { id: backId } })
    } else await router.push(backRoute)
  } else await router.push('/admin/manage/subjects')
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
