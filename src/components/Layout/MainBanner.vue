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
          :placeholder="$t('search')"
          type="search"
          variant="primary"
          wrapperClass="!bg-gray-100 border-transparent !py-2.5 !w-71"
          v-model:model-value="form.search"
        >
          <template #prefix>
            <i class="icon-search text-gray"></i>
          </template>
        </FormInput>

        <BaseButton 
          icon="icon-filter"
          :iconLeft="true"
          :text="$t('filter')"
          variant="secondary"
          wrapperClass="py-2.5 !w-30"
          @click="openModal"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from '@/components/Form/Input.vue'
import BaseButton from '@/components/Base/Button.vue';
import { reactive } from 'vue';

interface Emits {
  (e: 'openModal', value: boolean): void
}

const emit = defineEmits<Emits>()

const navlinks = [
  {
    name: 'MainDashboard',
    text: 'Dashboard' // $t('dashboard'),
  },
  {
    name: 'MainSponsors',
    text: 'Homiylar' // $t('sponsors'),
  },
  {
    name: 'MainStudents',
    text: 'Talabalar' // $t('students'),
  },

]

const form = reactive({
  search: null
})

const openModal = () => emit('openModal', true)
</script>

<style scoped>
.router-link-active {
  @apply bg-blue text-white transition duration-300
}
</style>