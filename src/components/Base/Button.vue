<template>
  <button
    class="flex-center gap-[10px] text-sm font-medium py-2 px-8 rounded-md active:scale-95 cursor-pointer transition-all"
    :class="[
      variants[variant],
      wrapperClass,
      { '!pointer-events-none': loading },
      { 'flex-row-reverse': iconLeft }
    ]"
    v-bind="{ disabled, type }"
  >
    <slot>
      <i :class="iconLeft" v-if="iconLeft"></i>
      <span v-if="text">{{ text }}</span>
      <i :class="icon" v-if="icon"></i>
    </slot>
  </button>
</template>

<script setup lang="ts">

interface Props {
  variant: 'primary' | 'secondary' | 'delete',
  loading?: boolean,
  iconLeft?: boolean,
  text?: string,
  icon?: string,
  disabled?: boolean,
  wrapperClass: string
  type: 'button' | 'submit',
}
interface ButtonVariants { 
  primary: string, 
  secondary: string, 
  delete: string, 
  outline: string 
} 

withDefaults(defineProps<Props>(), {
  text: 'button',
  loading: false,
  variant: 'primary',
  disabled: false,
  type: 'button',
})

const variants: ButtonVariants = {
  primary: 'bg-blue text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray',
  secondary: 'bg-gray-200 text-blue disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray',
  delete: 'bg-red-100 text-red disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray',
  outline: 'bg-white text-blue border-blue disabled:cursor-not-allowed disabled:text-gray disabled:border-gray',
}

</script>