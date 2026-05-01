<template>
  <AccountLogin :backendPath="calculatedBackendPath">Student</AccountLogin>
</template>

<script setup>
import AccountLogin from '@/components/login/subComponents/accountLogin.vue'
import * as env from '@/config/env.js'

const calculatedBackendPath = env.BACKEND_URL + '/api/auth/login/student'
</script>

<style></style>
