<template>
  <div 
    class="relative border border-sky bg-sky/20 rounded-md p-2.5 cursor-pointer" 
    :class="[
      { '!border-blue': selectActive },
      wrapperClass
    ]"
    @click="toggleSelectActive"
  >
    <!-- select -->
    <div class="w-full flex-y-center justify-between">
      <p class="text-sm text-blue-700 font-normal">{{ option }}</p>
      <i class="icon-chevron-down text-gray transition duration-300" :class="{ 'rotate-180 !text-blue': selectActive }"></i>
    </div>

    <!-- options -->
    <div 
      class="absolute z-30 flex flex-col top-11 left-0 w-full border border-sky bg-white rounded-lg overflow-scroll transition duration-300" 
      :class="[
        { '!opacity-0 !hidden': !selectActive },
        optionsWrapper
      ]"
    >
      <button 
        class="w-full h-10 text-left flex py-3 px-4 bg-white first-of-type:border-none border-t border-sky text-sm text-blue-700 font-normal hover:bg-blue hover:text-white transition duration-300" 
        :class="optionClass"
        v-for="(option, key) in options"
        :key
        @click="setActiveOption(option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface Props {
  wrapperClass?: string
  optionsWrapper?: string
  optionClass?: string,
  options: string[]
}

const props = defineProps<Props>()

const option = ref<string>(props.options[0])
const selectActive = ref<boolean>(false)
const setActiveOption = (val: any) => option.value = val
const toggleSelectActive = () => selectActive.value = !selectActive.value

defineExpose({ option })
</script>