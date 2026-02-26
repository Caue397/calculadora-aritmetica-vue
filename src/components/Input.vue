<script setup lang="ts">
defineProps<{
  modelValue?: number | string
}>()

function onInput(event: Event) {
  const input = event.target as HTMLInputElement
  input.value = input.value.replace(/[^0-9]/g, '')
  emit('update:modelValue', input.value)
}

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    type="text"
    inputmode="numeric"
    :value="modelValue"
    @input="onInput"
    class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
  />
</template>
