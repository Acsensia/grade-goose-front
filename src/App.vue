<template>
  <router-view></router-view>
</template>

<script setup></script>

<style lang="scss">
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
</style>
