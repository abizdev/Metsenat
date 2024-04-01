<template>
  <div class="flex flex-col gap-2">
    <label :id="id" class="text-xs text-black font-medium tracking-[1.13px] uppercase" :class="labelClass">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">

interface Props {
  id: string
  label: string,
  labelClass?: string 
}

defineProps<Props>()

</script>