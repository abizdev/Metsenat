<template>
  <!-- logo -->
  <img src="/images/logo-auth.svg" alt="logo" />

  <!-- login form -->
  <div class="max-w-[379px] w-full bg-white p-8 rounded-xl">
    <h2 class="text-2xl text-blue-700 font-bold">Kirish</h2>

    <form class="flex flex-col gap-[22px] mt-11" @submit.prevent="submitForm">
      <!-- login -->
      <FormGroup label="LOGIN" id="inputLogin">
        <FormInput
          id="inputLogin"
          placeholder="adm8904"
          type="text"
          v-model:model-value="form.login"
          :error="v$.login.$error"
        />
      </FormGroup>

      <!-- password -->
      <FormGroup label="PAROL" id="inputPassword">
        <FormInput
          id="inputPassword"
          placeholder="******"
          type="password"
          v-model:model-value="form.password"
        />
      </FormGroup>

      <!-- reCaptcha -->
      <VueRecaptcha @verify="handleReCaptcha" sitekey="6LfN96UpAAAAAEZoakt8EBLc7bRUrRad-2rigwMw" />

      <BaseButton text="Kirish" wrapper-class="!py-[14px]" variant="primary" type="submit"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import FormGroup from '@/components/Form/Group.vue'
import FormInput from '@/components/Form/Input.vue'
import BaseButton from '@/components/Base/Button.vue'

import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { VueRecaptcha } from "vue-recaptcha";

import useApi from '@/plugins/axios'

const router = useRouter()
const loading = ref(false)

const form = reactive({
  login: 'metsenatadmin', // 'metsenatadmin',
  password: 'uF9aH1vZ3bV2kN2y', // 'uF9aH1vZ3bV2kN2y'
  reCaptcha: false
})
const rules = {
  login: { required },
  password: { required },
  reCaptcha: { required },
}
const v$ = useVuelidate(rules, form)

const handleReCaptcha = () => {
  form.reCaptcha = true
}

const submitForm = async () => {
  loading.value = true;

  if (!form.login && !form.password && !form.reCaptcha) {
    loading.value = false;
    alert('error');
    return
  }

  const obj = {
    username: form.login,
    password: form.password
  }
  
  try {
    const res = await useApi.post('/auth/login/', obj)

    localStorage.refresh = res.data.refresh
    localStorage.access = res.data.access

  } catch (error) {
    console.log('error in logging user', error)
  } finally {
    loading.value = false
    router.push({ name: 'MainDashboard' })
  }
  
}

</script>

<style scoped></style>
