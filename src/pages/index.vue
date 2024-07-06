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
  </div>
</template>

<script setup lang="ts">
const msg = ref('auto import')
const target = ref<HTMLElement | null>(null)
const { x, y, isOutside } = useMouseInElement(target)
</script>
