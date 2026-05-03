<template>
  <AccountLogin :backendPath="calculatedBackendPath" redirectPath="/admin" userType="administrator"
    >Administrator</AccountLogin
  >
</template>

<script setup>
import AccountLogin from '@/components/login/subComponents/accountLogin.vue'
import * as env from '@/config/env.js'

const calculatedBackendPath = env.BACKEND_URL + '/api/auth/login/admin'
</script>

<style></style>
