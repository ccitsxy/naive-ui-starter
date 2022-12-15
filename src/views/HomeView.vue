<script setup lang="ts">
import { inject } from 'vue'
import type { ShallowRef } from 'vue'

import { useDark, useToggle, useFullscreen } from '@vueuse/core'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const theme = inject('theme') as ShallowRef<GlobalTheme | null | undefined>
const isDark = useDark({
  onChanged(isDark) {
    const html = document.getElementsByTagName('html')[0]
    if (isDark) {
      html.setAttribute('class', 'dark')
      theme.value = darkTheme
    } else {
      html.removeAttribute('class')
      theme.value = null
    }
  }
})
const toggleDark = useToggle(isDark)
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()
const { t, locale } = useI18n()
const options = [
  {
    label: 'English',
    key: 'en'
  },
  {
    label: '中文',
    key: 'zh_CN'
  },
  {
    label: '日本語',
    key: 'jp'
  }
]
function handleSelect(key: string) {
  locale.value = key
}
</script>

<template>
  <n-layout class="min-h-screen">
    <n-layout-header bordered class="h-12 flex items-center px-4 space-x-2">
      <div class="flex-auto" />
      <n-dropdown trigger="hover" :options="options" @select="handleSelect">
        <n-button quaternary circle :focusable="false">
          <template #icon>
            <div class="i-carbon-language"></div>
          </template>
        </n-button>
      </n-dropdown>
      <n-button quaternary circle :focusable="false" @click="toggleDark()">
        <template #icon>
          <div v-if="isDark" class="i-fluent-weather-moon-24-regular" />
          <div v-else class="i-fluent-weather-sunny-24-regular" />
        </template>
      </n-button>
      <n-button quaternary circle :focusable="false" @click="toggleFullscreen()">
        <template #icon>
          <div v-if="isFullscreen" class="i-fluent-full-screen-minimize-24-regular" />
          <div v-else class="i-fluent-full-screen-maximize-24-regular" />
        </template>
      </n-button>
    </n-layout-header>
    <n-layout-content class="h-[calc(100vh-48px)]">
      <div class="grid place-items-center h-full">
        <n-h1>{{ t('home.hello') }}</n-h1>
      </div>
    </n-layout-content>
  </n-layout>
</template>
