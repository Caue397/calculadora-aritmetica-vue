<script setup lang="ts">
defineProps<{
  modelValue?: string | number
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    class="min-w-14 rounded-md border border-gray-300 bg-white px-2 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
  >
    <slot />
  </select>
</template>
