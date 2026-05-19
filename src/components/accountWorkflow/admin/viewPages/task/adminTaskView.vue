<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Task"
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
  { key: 'name', label: 'Task Name', type: 'string' },
  { key: 'time_due', label: 'Due Date', type: 'date' },
  { key: 'can_be_handed_in_past_due', label: 'Can be handed in past due', type: 'boolean' },
  { key: 'instructions', label: 'Task Instructions', type: 'large-text' },
]
const actionGroups = [
  {
    name: 'Task Management',
    actions: [
      {
        id: 'changeName',
        label: 'Set New Task Name...',
        payload: { route: '/admin/manage/task/changeName' },
      },
      {
        id: 'changeInstr',
        label: 'Set New Task Instructions...',
        payload: { route: '/admin/manage/task/changeInstr' },
      },
      {
        id: 'changeTimeDue',
        label: 'Set New Task Due Date...',
        payload: { route: '/admin/manage/task/changeTimeDue' },
      },
      {
        id: 'changePDEnforcement',
        label: 'Choose whether the task can be handed in past due...',
        payload: { route: '/admin/manage/task/changePDEnforcement' },
      },
    ],
  },
  {
    name: 'Task Assigned Entities',
    actions: [
      {
        id: 'seeAssignedTeachers',
        label: 'See Assigned Teachers...',
        payload: { route: '/admin/manage/task/seeassigned/teachers' },
      },
      {
        id: 'seeAssignedStudents',
        label: 'See Assigned Students...',
        payload: { route: '/admin/manage/task/seeassigned/students' },
      },
      {
        id: 'seeAssignedSubjects',
        label: 'See Assigned Subjects...',
        payload: { route: '/admin/manage/task/seeassigned/subjects' },
      },
    ],
  },
  {
    name: 'Task Unassigned Entities',
    actions: [
      {
        id: 'seeUnassignedTeachers',
        label: 'See Unassigned Teachers...',
        payload: { route: '/admin/manage/task/seeunassigned/teachers' },
      },
      {
        id: 'seeUnassignedStudents',
        label: 'See Unassigned Students...',
        payload: { route: '/admin/manage/task/seeunassigned/students' },
      },
      {
        id: 'seeUnassignedSubjects',
        label: 'See Unassigned Subjects...',
        payload: { route: '/admin/manage/task/seeunassigned/subjects' },
      },
    ],
  },
]

onMounted(async () => {
  const entityInfo = await entityManagement.getTaskInfo(accessTokenStore.accessToken, id)
  record.value = entityInfo
})

async function handleBackEmit() {
  if (backRoute) {
    if (backId) await router.push({ path: backRoute, query: { id: backId } })
    else await router.push(backRoute)
  } else await router.push('/admin/manage/tasks')
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
