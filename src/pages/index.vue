<template>
  <div ref="target">
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <div>hello world</div>
    <div>{{ msg }}</div>
    <div class="text-3xl font-bold underline">hello</div>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <p>isOutside: {{ isOutside }}</p>
    <HelloWorld />
    <UserComponent />
    <el-button>button</el-button>
    <i-mdi-account :style="{ color: 'red', fontSize: '1.5rem' }" />
    <i-ri24-hours-line />
    <i-material-symbols10k />

    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  </div>
</template>

<script setup lang="ts">
const msg = ref('auto import')
const target = ref<HTMLElement | null>(null)
const { x, y, isOutside } = useMouseInElement(target)
</script>
