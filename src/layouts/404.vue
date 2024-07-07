<template>
  <h1>404</h1>
  <RouterView />
  <button @click="router.back()">返回</button>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
