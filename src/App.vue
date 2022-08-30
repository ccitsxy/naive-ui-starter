<script setup lang="ts">
import { zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" abstract inline-theme-disabled>
    <router-view />
  </n-config-provider>
</template>
