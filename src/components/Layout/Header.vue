<template>
  <header class="bg-white">
    <div class="container flex-y-center justify-between py-3">
      <RouterLink :to="{ name: 'main' }">
        <img src="/images/logo.svg" alt="logo">
      </RouterLink>

      <div class="flex-center gap-10">
        <RouterLink to="#!" class="w-[133px] flex items-center justify-end gap-6 p-1 rounded-md bg-[#F1F1F3]">
          <span class="text-sm text-blue-700 font-bold">Shohrux</span>
          <span class="w-8 h-8 rounded-md bg-[#00AE69] flex items-end">

          </span>
        </RouterLink>

        <BaseButton wrapper-class="bg-white border-2" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

import BaseButton from '@/components/Base/Button.vue'
</script>

<style scoped>

</style>