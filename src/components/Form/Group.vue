<template>
  <div class="flex flex-col gap-2">
    <label :id="id" class="text-xs text-black font-medium tracking-[1.13px]">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">

defineProps<{ label: string, id: string }>()

</script>