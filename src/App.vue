<script setup lang="ts">
import { shallowRef, provide } from 'vue'

import { zhCN, dateZhCN } from 'naive-ui'
import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'

const theme = shallowRef<GlobalTheme | null | undefined>()
provide('theme', theme)

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily:
      'Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
}
</script>

<template>
  <n-config-provider
    abstract
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>
