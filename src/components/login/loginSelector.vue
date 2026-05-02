<template>
  <div class="container">
    <div class="header">
      <h2>Select Account Type</h2>
      <button @click="toggleTheme" class="theme-switch">
        Toggle {{ isDark ? 'White' : 'Black' }} Theme
      </button>
    </div>
    <div class="button-group">
      <button @click="$router.push('/login/student')">Student</button>
      <button @click="$router.push('/login/teacher')">Teacher</button>
      <button @click="$router.push('/login/admin')">Administrator</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  localStorage.setItem('app-theme', theme)
  document.documentElement.setAttribute('data-theme', theme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('app-theme') || 'light'
  isDark.value = savedTheme === 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid var(--border-color);
  padding: 20px;
  width: 100%;
  max-width: 400px;
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

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}
</style>
