<template>
  <div class="bg-white py-6">
    <div class="flex-y-center justify-between container">

      <!-- navigation -->
      <div class="flex-center border border-sky-300 rounded-md overflow-hidden">
        <RouterLink 
          v-for="(link, key) in navlinks"
          :key
          :to="{ name: link.name }"
          class="text-xs text-blue/60 bg-white py-3.5 px-14"
          :class="{ 'border-x border-sky-300': key === 1 }"
        >
          {{ link.text }}
        </RouterLink>
      </div>

      <!-- filters -->
      <div class="flex-center gap-5">
        <FormInput
          id="search"
          placeholder="Izlash"
          type="text"
          wrapperClass="!bg-gray-100 border-none !py-2.5 !w-71"
          v-model:model-value="form.search"
        >
          <template #prefix>
            <i class="icon-search text-gray"></i>
          </template>
        </FormInput>

        <BaseButton 
          icon="icon-filter"
          :iconLeft="true"
          text="Filter"
          variant="secondary"
          wrapperClass="py-2.5 !w-30"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from '@/components/Form/Input.vue'
import BaseButton from '@/components/Base/Button.vue';
import { reactive } from 'vue';

const navlinks = [
  {
    name: 'MainDashboard',
    text: 'Dashboard',
  },
  {
    name: 'MainSponsors',
    text: 'Homiylar',
  },
  {
    name: 'MainStudents',
    text: 'Talabalar',
  },

]

const form = reactive({
  search: null
})
</script>

<style scoped>
.router-link-active {
  @apply bg-blue text-white transition duration-300
}
</style>