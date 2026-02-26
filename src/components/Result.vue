<script setup lang="ts">
defineProps<{
  result?: string | null
}>()
</script>

<template>
  <div class="flex justify-center items-center mt-4">
    <div v-if="result !== null" class="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-center text-2xl font-bold shadow-sm">
      {{ result }}
    </div>
  </div>
</template>