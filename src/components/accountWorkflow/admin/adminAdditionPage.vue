<template>
  <div class="overContainer">
    <div class="container">
      <div class="button-group">
        <button @click="$router.push('/admin/add/teacher')">Add a new teacher...</button>
        <button @click="$router.push('/admin/add/student')">Add a new student...</button>
        <button @click="$router.push('/admin/add/studentgroup')">Add a new student group...</button>
        <button @click="$router.push('/admin/add/specialty')">Add a new specialty...</button>
        <button @click="$router.push('/admin/add/subject')">Add a new subject...</button>
        <button @click="$router.push('/admin/add/task')">Add a new task...</button>
        <button @click="$router.push('/admin/add/solution')">Add a new solution...</button>
      </div>
      <div class="button-group">
        <button @click="$router.push('/admin')">Back</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
