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

<style></style>
