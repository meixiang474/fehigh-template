<template>
  <div>Child Component</div>
  <button @click="handleClick">click me</button>
</template>

<script setup lang="ts">
const num = ref(0)

// const emits = defineEmits<
//   SE<{
//     clickCount(num: number): void
//   }>
// >()

// const emits = defineEmits<{ (e: 'clickCount', id: number): void }>()
const emits = defineEmits<{ clickCount: [num: number] }>()

const handleClick = () => {
  console.log('click')
  emits('clickCount', ++num.value)
}
</script>
