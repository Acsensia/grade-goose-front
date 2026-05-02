<template>
  <div class="topMenuContainer header">
    <h2>Hello, {{ accountName }}</h2>
  </div>
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
import { ref } from 'vue'

const accountName = ref('loading...')
// import AccountLogin from '@/components/login/subComponents/accountLogin.vue'
// import * as env from '@/config/env.js'

// const calculatedBackendPath = env.BACKEND_URL + '/api/auth/login/admin'
</script>

<style>
.topMenuContainer {
  border: 1px solid var(--border-color);
  padding: 5px;
  width: 100%;
  max-height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

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
</style>
