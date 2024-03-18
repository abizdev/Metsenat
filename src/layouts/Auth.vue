<template>
  <div class="h-screen flex-center flex-col gap-y-12">
    <!-- logo -->
    <img src="/images/logo-auth.svg" alt="logo">

    <!-- login form -->
    <div class="max-w-[379px] w-full bg-white p-8 rounded-xl">
      <h2 class="text-2xl text-blue-700 font-bold">Kirish</h2>

      <form class="flex flex-col gap-[22px] mt-11">
        <!-- login -->
        <FormGroup label="LOGIN">
          <FormInput
            id="inputLogin"
            placeholder="adm8904"
            type="text"
            v-model:model-value="inputLogin"
          />
        </FormGroup>

        <!-- password -->
        <FormGroup label="PAROL">
          <FormInput
            id="inputPassword"
            placeholder="******"
            type="password"
            v-model:model-value="inputPassword"
          />
        </FormGroup>

        <!-- reCaptcha -->
<!--        <VueRecaptcha sitekey="" />-->

        <BaseButton
          text="Kirish"
          wrapper-class="!py-[14px]"
        />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormGroup from '@/components/Form/Group.vue'
import FormInput from '@/components/Form/Input.vue'
import BaseButton from '@/components/Base/Button.vue'

import { ref } from 'vue'
// import { useRecaptchaProvider,  } from 'vue-recaptcha'
// import VueRecaptcha from "vue-recaptcha";

// useRecaptchaProvider()

const inputLogin = ref('')
const inputPassword = ref('')
</script>