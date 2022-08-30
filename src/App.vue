<script setup lang="ts">
import { shallowRef, provide } from 'vue'

import { zhCN } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

const theme = shallowRef<GlobalTheme | null | undefined>()
provide('theme', theme)
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    abstract
    inline-theme-disabled
    :theme="theme"
  >
    <router-view />
  </n-config-provider>
</template>
