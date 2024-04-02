<template>
  <tfoot class="flex-y-center justify-between mt-6">
    <p class="text-sm text-black font-normal">
      100 tadan {{ page.startCount }}-{{ page.endCount }} ko'rsatilmoqda
    </p>

    <div class="flex-center gap-5">
      <!-- select pagination -->
      <div class="flex-center gap-3">
        <p class="text-sm text-black font-normal">Ko‘rsatish</p>
        <FormSelect
          v-model="page.size"
          :options="pageSizes" 
          wrapperClass="bg-white !py-2"
          selectClass="gap-2"
        />
      </div>

      <!-- button pagination -->
      <div class="flex-center gap-2">
        <vue-awesome-paginate
          :total-items="100"
          :items-per-page="page.size"
          :max-pages-shown="5"
          v-model="page.current"
          :on-click="selectedPage"
        >
          <!-- prev -->
          <template #prev-button>
            <button
              :disabled-back-button="page.current == page.size"
            >
              <i class="icon-chevron-left text-gray text-xs"></i>
            </button>
          </template>

          <!-- next -->
          <template #next-button>
            <button
              :disabled-next-button="page.current == page.size"
            >
              <i class="icon-chevron-right text-gray text-xs"></i>
            </button>
          </template>

        </vue-awesome-paginate>
      </div>
    </div>
  </tfoot>
</template>

<script setup lang="ts">
import FormSelect from '../Form/Select.vue';

import { reactive, watch } from 'vue';

interface Page {
  current: number;
  size: number;
  startCount: number;
  endCount: number;
}

const emit = defineEmits<{
  (e: 'changeCurrentPage', current: number, size: number): void;
}>();

const page = reactive<Page>({
  current: 1,
  size: 10,
  startCount: 1,
  endCount: 10,
});
const pageSizes = [
  { id: Math.random(), name: 1 },
  { id: Math.random(), name: 2 },
  { id: Math.random(), name: 3 },
  { id: Math.random(), name: 4 },
  { id: Math.random(), name: 5 },
  { id: Math.random(), name: 6 },
  { id: Math.random(), name: 7 },
  { id: Math.random(), name: 8 },
  { id: Math.random(), name: 9 },
  { id: Math.random(), name: 10 },
]

const selectedPage = (selectedPage: number): number => (page.current = selectedPage);

const calcCurrentList = (action: string, current: number) => {
  page.endCount = page.current * 10
  page.startCount = action === 'increase' ? current + 10 - 1  : page.startCount - 10;
};

watch(
  () => page.current,
  (newVal, oldVal) => {
    if (newVal > oldVal) {
      calcCurrentList('increase', page.current);
    } else {
      calcCurrentList('decrease', page.current);
    }
    emit('changeCurrentPage', page.current, page.size);
  }
);
watch(
  () => page.size,
  () => emit('changeCurrentPage', page.current, page.size)
)
</script>

<style>
.pagination-container {
  @apply gap-2
}
.paginate-buttons {
  @apply w-8 h-8 rounded flex-center bg-white border border-gray-200 text-sm disabled:border-none disabled:bg-gray-100
}
.paginate-buttons.number-buttons.active-page {
  @apply text-blue border-blue
}
</style>
