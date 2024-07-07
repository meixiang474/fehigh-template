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
  <Child @clickCount="handleClick" />
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeIndex'
})

// defineRender(() => <div>hello</div>)

const msg = ref('auto import')
const target = ref<HTMLElement | null>(null)
const { x, y, isOutside } = useMouseInElement(target)

const handleClick = (num: number) => {
  console.log(num)
}
</script>

<route lang="yaml">
meta:
  layout: default
</route>
