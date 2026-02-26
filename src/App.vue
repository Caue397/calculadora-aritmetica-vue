<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import Result from './components/Result.vue'
import { calculator } from './utils/calculator'

const num1 = ref<string>('')
const num2 = ref<string>('')
const operator = ref<string>('+')

const result = computed(() => {
  return calculator(Number(num1.value), Number(num2.value), operator.value)
})

</script>

<template>
  <main class="h-screen flex justify-center items-center mx-auto max-w-7xl">
    <div class="bg-black/5 max-w-md rounded-lg p-4 shadow-md shadow-black/20">
      <h1 class="text-xl text-center">Calculadora Aritmética</h1>
      <Result :result="result?.toString() ?? null" />

      <div class="flex gap-2 mt-4">
        <Input v-model="num1" />
        <Select v-model="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </Select>
        <Input v-model="num2" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
