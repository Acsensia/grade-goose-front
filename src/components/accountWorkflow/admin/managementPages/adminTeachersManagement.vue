<template>
  <div class="overContainer">
    <div class="container">
      <DataTableView
        :rows="rows"
        :filters-config="filtersConfig"
        :group-actions="groupActions"
        @view-details="handleViewDetailsEvent"
      ></DataTableView>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import DataTableView from '@/components/accountWorkflow/admin/subComponents/dataTableView.vue'
import * as otherAccountManagement from '@/utilities/account/otherAccountManagement.js'
import router from '@/router'

const accessTokenStore = useAccessTokenStore()

let rows = ref([])
const filtersConfig = [
  ['id', 'ID', ''],
  ['first_name', 'First Name', ''],
  ['last_name', 'Last Name', ''],
  ['patronymic_name', 'Patronymic Name', ''],
]
const groupActions = [{ id: 'delete', name: 'Delete selected...' }]

onMounted(async () => {
  const allTeachers = await otherAccountManagement.getAllAccounts(
    accessTokenStore.accessToken,
    'teacher',
    'teacher_id',
  )
  rows.value = allTeachers.result
})

async function handleViewDetailsEvent(rowId) {
  await router.push({ path: '/admin/view/teacher', query: { id: rowId } })
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
