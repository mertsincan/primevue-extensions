<script setup>
import { ref } from 'vue'
import SearchInput from './lib/searchinput/SearchInput.vue'
import FilterChips from './lib/filterchips/FilterChips.vue'

defineProps({
  msg: String
})

const searchValue = ref('')
const searchMsg = ref('')
const filters = ref([
  { label: 'Action' },
  { label: 'Comedy' },
  { label: 'Mystery' },
  { label: 'Thriller', removable: true },
])

const onSearchButtonClick = () => {
  searchMsg.value = searchValue.value ? `The "${searchValue.value}" is not found.` : '';
}
  
</script>

<template>
  <h1>{{ msg }}</h1>

  <SearchInput v-model="searchValue" placeholder="Search..." :buttonProps="{ type: 'button', class: 'p-button-info', onClick: onSearchButtonClick }" />
  <div :style="{dislay: 'flex', alignItems: 'center', margin: '1rem'}">
    <strong>Filters:</strong> <FilterChips :value="filters" />
  </div>
  <p v-if="!!searchMsg.length">{{ searchMsg }}</p>
</template>
