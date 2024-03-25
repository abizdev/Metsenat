<template>
  <tfoot class="flex-y-center justify-between mt-6">
    <p class="text-sm text-black font-normal">
      100 tadan {{ page.startCount }}-{{ page.endCount }} ko'rsatilmoqda
    </p>

    <div class="flex-center gap-5">
      <!-- select pagination -->
      <div class="flex-center gap-3">
        <p class="text-sm text-black font-normal">Ko‘rsatish</p>
        <select v-model="page.current" @change="selectedPage(page.current)">
          <option
            class="text-sm text-black font-normal"
            v-for="(page, key) in 10"
            :key
            :value="page"
          >
            {{ page }}
          </option>
        </select>
      </div>

      <!-- button pagination -->
      <div class="flex-center gap-2">
        <!-- prev -->
        <button
          class="w-8 h-8 rounded flex-center bg-white border border-gray-200 disabled:border-none disabled:bg-gray-100"
          :disabled="page.current === 1"
          @click="prevPage"
        >
          <i class="icon-chevron-left text-gray text-xs"></i>
        </button>

        <!-- pages -->
        <button
          v-for="(pageCount, key) in 10"
          :key
          class="w-8 h-8 rounded flex-center bg-white border border-gray-200 text-sm"
          :class="
            page.current === pageCount ? '!text-blue !border-blue' : 'text-black border-gray-200'
          "
          @click="selectedPage(pageCount)"
        >
          {{ pageCount }}
        </button>

        <!-- next -->
        <button
          class="w-8 h-8 rounded flex-center bg-white border border-gray-200 disabled:border-none disabled:bg-gray-100"
          :disabled="page.current === 10"
          @click="nextPage"
        >
          <i class="icon-chevron-right text-gray text-xs"></i>
        </button>
      </div>
    </div>
  </tfoot>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';

interface Page {
  current: number;
  active: number;
  startCount: number;
  endCount: number;
}

const emit = defineEmits<{
  (e: 'changeCurrentPage', value: number): void;
}>();

const page = reactive<Page>({
  current: 1,
  active: 1,
  startCount: 1,
  endCount: 10
});

const prevPage = (): number => (page.current -= 1);
const nextPage = (): number => (page.current += 1);
const selectedPage = (selectedPage: number): number => (page.current = selectedPage);

const calcCurrentList = (action: string) => {
  page.startCount = action === 'increase' ? page.startCount + 10 : page.startCount - 10;
  page.endCount = action === 'increase' ? page.endCount + 10 : page.endCount - 10;
};

watch(
  () => page.current,
  (newVal, oldVal) => {
    if (newVal > oldVal) {
      calcCurrentList('increase');
    } else {
      calcCurrentList('decrease');
    }
    emit('changeCurrentPage', page.current);
  }
);
</script>
