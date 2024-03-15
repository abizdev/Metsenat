<template>
  <button 
    :class="[
      variants[variant],
      { '!pointer-events-none': loading },
      { 'flex-row-reverse': iconLeft }
    ]"
    class="flex-center gap-[10px] text-sm font-medium py-2 px-8 rounded-md active:scale-95 cursor-pointer"
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
  iconLeft?: string,
  text?: string,
  icon?: string,
  disabled?: boolean,
  type: 'button' | 'submit',
}

withDefaults(defineProps<Props>(), {
  text: 'button',
  loading: false,
  variant: 'primary',
  disabled: false,
  type: 'button'
})

const variants: { primary: string, secondary: string, delete: string } = {
  primary: 'bg-blue text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray',
  secondary: 'bg-gray-200 text-blue disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray',
  delete: 'bg-red-100 text-red disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray',
}

</script>