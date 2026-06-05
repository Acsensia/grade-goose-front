<template>
  <div class="overContainer">
    <div class="container">
      <div class="header">
        <h2>Object Stats</h2>
      </div>
      <div class="button-group">
        <button @click="handleStudentGroupStats">
          Calculate Amounts of Specialties Assigned to Student Groups
        </button>
        <button @click="handleSpecialtyStats">
          Calculate Amounts of Subjects Assigned to Specialties
        </button>
        <button @click="handleSubjectStats">Calculate Amounts of Tasks Assigned to Subjects</button>
      </div>
      <div class="button-group">
        <button @click="$router.push('/admin')">Back</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as entityManagement from '@/utilities/account/entityManagement'
import { useAccessTokenStore } from '@/stores/accessToken'

const accessTokenStore = useAccessTokenStore()

async function downloadJson(json, filename = 'data.json') {
  const jsonString = typeof json === 'string' ? json : JSON.stringify(json, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

async function handleStudentGroupStats() {
  const result = await entityManagement.getStudentGroupsSpecialtiesCount(
    accessTokenStore.accessToken,
  )
  await downloadJson(result, 'studentGroupsStats.json')
}

async function handleSpecialtyStats() {
  const result = await entityManagement.getSpecialtiesSubjectsCount(accessTokenStore.accessToken)
  await downloadJson(result, 'specialtiesStats.json')
}

async function handleSubjectStats() {
  const result = await entityManagement.getSubjectsTasksCount(accessTokenStore.accessToken)
  await downloadJson(result, 'subjectsStats.json')
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
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
