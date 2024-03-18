<template>
  <div class="flex flex-col gap-2">
    <p class="text-xs text-black font-medium tracking-[1.13px]">{{ label }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()

</script>

<style scoped>

</style>