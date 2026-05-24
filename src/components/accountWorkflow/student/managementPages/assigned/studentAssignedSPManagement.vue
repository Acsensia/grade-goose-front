<template>
  <div class="overContainer">
    <div class="container">
      <DataTableView
        :rows="rows"
        :filters-config="filtersConfig"
        :group-actions="groupActions"
        :fields-config="fieldsConfig"
        :viewTitle="`Viewing All My Assigned Specialties...`"
        @back="handleBackEmit"
        @view-details="handleViewDetailsEvent"
      ></DataTableView>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import DataTableView from '@/components/accountWorkflow/shared/subComponents/dataTableView.vue'
import * as studentAllManagement from '@/utilities/account/studentAllManagement'
import router from '@/router'

const accessTokenStore = useAccessTokenStore()

let rows = ref([])
const filtersConfig = [
  ['id', 'ID', ''],
  ['name', 'Specialty Name', ''],
  ['abbreviation', 'Specialty Abbreviation', ''],
  ['description', 'Specialty Description', ''],
]
const groupActions = []
const fieldsConfig = {
  specialty_id: { exclude: true },
  name: { displayName: 'Specialty name' },
  abbreviation: { displayName: 'Specialty abbreviation' },
  description: { displayName: 'Specialty description', maxLength: 50 },
}

async function reloadRows() {
  rows.value = []
  const reloadedRows = await studentAllManagement.getAllAssignedSpecialties(
    accessTokenStore.accessToken,
  )
  rows.value = reloadedRows.result
}

onMounted(async () => {
  await reloadRows()
})

async function handleBackEmit() {
  await router.push('/student')
}

async function handleViewDetailsEvent(rowId) {
  await router.push({
    path: '/student/view/specialty',
    query: {
      id: rowId,
      backRoute: '/student/manage/assigned/specialties',
    },
  })
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
