<template>
  <header class="bg-white shadow-xl relative">
    <div class="container flex-y-center justify-between py-3">
      <RouterLink :to="{ name: 'MainDashboard' }">
        <img src="/images/logo.svg" alt="metsenat">
      </RouterLink>

      <div class="flex-center gap-10">
        <RouterLink to="#!" class="w-[133px] flex items-center justify-end gap-6 p-1 rounded-md bg-[#F1F1F3]">
          <span class="text-sm text-blue-700 font-bold font-['sf-pro-text']">Shohrux</span>
          <i class="icon-user text-white text-[22px] w-8 h-8 rounded-md bg-[#00AE69] flex-x-center items-end" />
        </RouterLink>

        <button class="active:scale-50 transition">
          <i class="icon-logout text-gray text-lg"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>