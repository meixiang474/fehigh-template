<template>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <div>about</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<route lang="yaml">
meta:
  layout: home
</route>
