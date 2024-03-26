<template>
  <div
    class="flex-center gap-1 border  focus-within:border-blue-300 bg-gray-200/20 rounded-md py-3 px-4 transition"
    :class="[wrapperClass]"
  >
    <slot name="prefix" />
    <input
      :id
      :type
      :placeholder
      v-model="model"
      class="text-sm text-blue-700 bg-transparent flex-grow border-none outline-none placeholder:text-blue-700/35"
      :class="inputClass"
    >
    <slot name="sufix" />
  </div>
</template>

<script setup lang="ts">

interface Props {
  id: string,
  type: 'text' | 'password',
  placeholder: string,
  wrapperClass?: string
  inputClass?: string,
  error?: boolean,
}

withDefaults(defineProps<Props>(), {
  error: false
})

const model = defineModel('modelValue')
</script>