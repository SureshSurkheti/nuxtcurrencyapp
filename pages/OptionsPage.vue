<template>
  <div>
    <h1>Select an Option</h1>
    <div v-for="option in optionsStore.options" :key="option.id">
      <input
        type="radio"
        :id="option.label"
        name="options"
        :value="option.id"
        v-model="selectedOptionId"
        @change="selectOption(option.id)"
      />
      <label :for="option.label">{{ option.label }}</label>
    </div>
    <p>Selected Option: {{ selectedOption ? selectedOption.label : 'None' }}</p>
    <button @click="resetOptions">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useOptionsStore } from '../stores/useOptionsStores'

const optionsStore = useOptionsStore()

const selectedOptionId = ref<number | null>(null)

// Methods to manipulate the store
const selectOption = (optionId: number) => {
  optionsStore.selectOption(optionId)
}

const resetOptions = () => {
  optionsStore.resetOptions()
}

const selectedOption = computed(() => optionsStore.selectedOption)
</script>
