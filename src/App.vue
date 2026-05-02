<template>
  <router-view></router-view>
</template>

<script setup></script>

<style>
/* global styles applied to the document root */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --border-color: #000000;
}

:root[data-theme='dark'] {
  --bg-color: #000000;
  --text-color: #ffffff;
  --border-color: #ffffff;
}

/* general global styles */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: sans-serif;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.container {
  border: 1px solid var(--border-color);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

button {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
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
  gap: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}
</style>
