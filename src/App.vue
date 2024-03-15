<template>
  <div>
    <Button :disabled="false" variant="primary" />
    <Button :disabled="true" variant="secondary" />
    <Button :disabled="false" variant="delete" />
    <OutlineBtn :disabled="true" />
    <FormInput placeholder="" type="" id="name" />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Base/Button.vue'
import OutlineBtn from '@/components/Base/OutlineBtn.vue'
import FormInput from '@/components/Form/Input.vue'

</script>
