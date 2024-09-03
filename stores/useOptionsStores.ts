import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('options', {
  state: () => ({
    options: [
      { id: 1, label: 'Option 1', selected: false },
      { id: 2, label: 'Option 2', selected: false },
      { id: 3, label: 'Option 3', selected: false },
      { id: 4, label: 'Option 4', selected: false },
    ],
    selectedOptionId: null as number | null,
  }),
  
  getters: {
    // Getter to retrieve the selected option
    selectedOption(state) {
      return state.options.find(option => option.id === state.selectedOptionId) || null;
    },
    
    // Getter to get all options' labels
    optionLabels(state) {
      return state.options.map(option => option.label);
    },
  },
  
  actions: {
    // Action to select an option by its ID
    selectOption(optionId: number) {
      this.selectedOptionId = optionId;
      this.options.forEach(option => {
        option.selected = option.id === optionId;
      });
    },
    
    // Action to reset all options
    resetOptions() {
      this.selectedOptionId = null;
      this.options.forEach(option => option.selected = false);
    },
    
    // Action to add a new option dynamically
    addOption(label: string) {
      const newOptionId = this.options.length + 1;
      this.options.push({
        id: newOptionId,
        label,
        selected: false,
      });
    },
  },
})

