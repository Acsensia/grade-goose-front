<template>
  <div class="overContainer">
    <div class="container">
      <div class="button-group">
        <button @click="$router.push('/teacher/manage/assigned/studentgroups')">
          Manage Assigned Student Groups
        </button>
        <button @click="$router.push('/teacher/manage/assigned/specialties')">
          Manage Assigned Specialties
        </button>
        <button @click="$router.push('/teacher/manage/assigned/subjects')">
          Manage Assigned Subjects
        </button>
        <button @click="$router.push('/teacher/manage/assigned/subjects')">
          Manage Assigned Subjects
        </button>
        <button @click="$router.push('/teacher/manage/assigned/tasks')">
          Manage Assigned Tasks
        </button>
      </div>

      <div class="button-group">
        <button @click="$router.push('/teacher/add/task')">Task Addition</button>
        <button @click="$router.push('/teacher/manage/tasks')">Manage Tasks</button>
      </div>

      <div class="button-group">
        <button @click="$router.push('/teacher/manage/donetasks/all')">Manage All Solutions</button>
        <button @click="$router.push('/teacher/manage/donetasks/marked')">
          Manage Marked Solutions
        </button>
        <button @click="$router.push('/teacher/manage/donetasks/unmarked')">
          Manage Unmarked Solutions
        </button>
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
