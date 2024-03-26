<template>
  <div class="bg-white">
    <div class="flex-y-center justify-between container py-6">
      <div class="flex-center gap-3">
        <RouterLink to="#!">
          <i class="icon-arrow-left"></i>
        </RouterLink>
        <h2 class="text-2xl text-black font-[sf-pro-display]">Isfandiyorov Iqbol Bobomirzayevich</h2>
        <span class="text-xs font-normal text-green-500 bg-green-100 rounded-md py-1.5 px-3">Tasdiqlangan</span>
      </div>
  
      <BaseButton 
        icon="icon-add"
        :iconLeft="true"
        text="Homiy qo‘shish"
        variant="secondary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/Base/Button.vue'

</script>