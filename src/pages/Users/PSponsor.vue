<template>
  <Banner userType="sponsor" :user="sponsor" />

  <section class="flex flex-col items-center justify-between mt-10 h-screen">
    <!-- info block -->
    <div class="flex flex-col bg-white rounded-xl p-8 w-198 border border-blue-50">
      <!-- title -->
      <div class="flex-y-center justify-between">
        <h3 class="text-2xl text-black font-bold family-['sf-pro-display']">Homiy haqida</h3>
        <BaseButton
          icon="icon-edit"
          :iconLeft="true"
          text="Tahrirlash"
          variant="secondary"
          @click="toggleModalActive(true)"
        />
      </div>

      <!-- user info -->
      <div class="flex-y-center gap-5 w-61 mt-8">
        <span
          class="w-16 h-16 rounded-md bg-gray-200 border border-blue-50 flex-center flex-shrink-0"
        >
          <img src="/images/user.svg" alt="user" />
        </span>
        <h5 class="text-md text-black">{{ sponsor?.full_name }}</h5>
      </div>

      <!-- user tags -->
      <div class="grid grid-cols-2 mt-6">
        <!-- phone -->
        <div class="col-span-1 flex flex-col gap-3">
          <h6 class="text-xs text-gray uppercase">telefon raqam</h6>
          <p class="text-md text-black">{{ formatPhone(sponsor?.phone) }}</p>
        </div>

        <!-- sum -->
        <div class="col-span-1 flex flex-col gap-3">
          <h6 class="text-xs text-gray uppercase">Homiylik summasi</h6>
          <p class="text-md text-black uppercase">{{ formatNumbers(sponsor?.sum) }} uzs</p>
        </div>
      </div>
    </div>

    <img src="/images/bottom.png" class="w-205" alt="bottom" />
  </section>

  <CModal title="Tahrirlash" :show="showModal" @close="toggleModalActive">
    <template #content>
      <!-- modal toggler -->
      <div class="border border-sky rounded-md overflow-hidden flex-center">
        <button
          class="flex-grow tracking-wide leading-3 py-3.5 bg-white text-blue/60 text-xs uppercase hover:bg-slate-50 transition duration-150 disabled:cursor-not-allowed"
          :class="{ '!bg-blue text-white hover:!bg-blue-500': !sponsor?.is_legal }"
          :disabled="sponsor?.is_legal"
        >
          Jismoniy shaxs
        </button>
        <button
          class="flex-grow tracking-wide leading-3 py-3.5 bg-white text-blue/60 text-xs uppercase hover:bg-slate-50 transition duration-150 disabled:cursor-not-allowed"
          :class="{ '!bg-blue text-white hover:!bg-blue-500': sponsor?.is_legal }"
          :disabled="!sponsor?.is_legal"
        >
          Yuridik shaxs
        </button>
      </div>

      <!-- form legal entity sponsor -->
      <template v-if="sponsor?.is_legal">
        <!-- name -->
        <FormGroup id="name" label="F.I.Sh. (Familiya Ism Sharifingiz)">
          <FormInput
            id="name"
            type="text"
            placeholder="F.I.Sh. (Familiya Ism Sharifingiz)"
            v-model="formLegal.name"
            wrapperClass="h-10.5"
          />
        </FormGroup>

        <!-- phone -->
        <FormGroup id="phone" label="Telefon raqam">
          <FormInput
            id="phone"
            type="text"
            placeholder="###-##-##"
            v-model="formLegal.phone"
            wrapperClass="h-10.5"
          >
            <template #prefix>
              <span class="text-sm text-gray-700 font-normal">+998</span>
            </template>
          </FormInput>
        </FormGroup>

        <!-- status -->
        <FormGroup label="Holati" id="status">
          <FormSelect
            v-model:model-value="formLegal.status"
            :selectedVal="formLegal.status.name"
            :options="options.status"
          />
        </FormGroup>

        <!-- amount -->
        <FormGroup label="Homiylik summasi" id="amount">
          <FormSelect
            v-model:model-value="formLegal.amount"
            :selectedVal="formLegal.amount.name"
            :options="options.amount"
          />
        </FormGroup>

        <!-- payment_type -->
        <FormGroup label="To‘lov turi" id="payment_type">
          <FormSelect
            v-model:model-value="formLegal.payment_type"
            :selectedVal="formLegal.payment_type.name"
            :options="options.payment_type"
          />
        </FormGroup>

        <!-- firm -->
        <FormGroup id="firm" label="Tashkilot nomi">
          <FormInput
            id="firm"
            type="text"
            placeholder="Tashkilot nomi"
            v-model="formLegal.firm"
            wrapperClass="h-10.5"
          />
        </FormGroup>
      </template>

      <!-- form physical sponsor -->
      <template v-else>
        <!-- name -->
        <FormGroup id="name" label="F.I.Sh. (Familiya Ism Sharifingiz)">
          <FormInput
            id="name"
            type="text"
            placeholder="F.I.Sh. (Familiya Ism Sharifingiz)"
            v-model="form.name"
          />
        </FormGroup>

        <!-- phone -->
        <FormGroup id="phone" label="Telefon raqam">
          <FormInput id="phone" type="text" placeholder="###-##-##" v-model="form.phone">
            <template #prefix>
              <span class="text-sm text-gray-700 font-normal">+998</span>
            </template>
          </FormInput>Ç
        </FormGroup>

        <!-- status -->
        <FormGroup label="Holati" id="status">
          <FormSelect
            v-model:model-value="form.status"
            :selectedVal="form.status.name"
            :options="options.status"
          />
        </FormGroup>

        <!-- amount -->
        <FormGroup label="Homiylik summasi" id="amount">
          <FormSelect
            v-model:model-value="form.amount"
            :selectedVal="form.amount.name"
            :options="options.amount"
          />
        </FormGroup>

        <!-- payment_type -->
        <FormGroup label="To‘lov turi" id="payment_type">
          <FormSelect
            v-model:model-value="form.payment_type"
            :selectedVal="form.payment_type.name"
            :options="options.payment_type"
          />
        </FormGroup>
      </template>
    </template>
    <template #footer>
      <BaseButton icon="icon-file" :icon-left="true" text="Saqlash" variant="primary" />
    </template>
  </CModal>
</template>

<script setup lang="ts">
import Banner from '@/components/Layout/Banner.vue';
import CModal from '@/components/Common/CModal.vue';
import BaseButton from '@/components/Base/Button.vue';
import FormInput from '@/components/Form/Input.vue';
import FormGroup from '@/components/Form/Group.vue';
import FormSelect from '@/components/Form/Select.vue';

import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { formatPhone, formatNumbers } from '@/utils/formatters';
import { useSponsorsStore } from '@/stores/sponsors';

const route = useRoute();

const sponsorsStore = useSponsorsStore();
const sponsor = computed(() => sponsorsStore.sponsor);
sponsorsStore.getSponsorDetail(route.params.id);

const options = {
  status: [
    { id: Math.random(), name: 'Barchasi' },
    { id: Math.random(), name: 'Yangi' },
    { id: Math.random(), name: 'Moderatsiyada' },
    { id: Math.random(), name: 'Tasdiqlangan' },
    { id: Math.random(), name: 'Bekor qilingan' }
  ],
  amount: [
    { id: Math.random(), name: 'Barchasi' },
    { id: Math.random(), name: `${formatNumbers(1000000)} UZS` },
    { id: Math.random(), name: `${formatNumbers(5000000)} UZS` },
    { id: Math.random(), name: `${formatNumbers(7000000)} UZS` },
    { id: Math.random(), name: `${formatNumbers(10000000)} UZS` },
    { id: Math.random(), name: `${formatNumbers(30000000)} UZS` },
    { id: Math.random(), name: `${formatNumbers(50000000)} UZS` }
  ],
  payment_type: [
    { id: Math.random(), name: 'Click' },
    { id: Math.random(), name: 'Payme' },
    { id: Math.random(), name: 'Nalichno' }
  ]
};

const form = reactive({
  name: null,
  phone: null,
  status: {
    name: null
  },
  amount: {
    name: null
  },
  payment_type: {
    name: 'Nalichno'
  }
});
const formLegal = reactive({
  name: null,
  phone: null,
  status: {
    name: null
  },
  amount: {
    name: null
  },
  firm: null,
  payment_type: {
    name: 'Nalichno'
  }
});

watch(
  () => sponsor,
  (newVal) => {
    form.name = newVal.value?.full_name;
    form.phone = formatPhone(newVal.value?.phone);
    form.status.name = newVal.value?.get_status_display;
    form.amount.name = `${formatNumbers(newVal.value?.sum)} UZS`;

    formLegal.name = newVal.value?.full_name;
    formLegal.phone = formatPhone(newVal.value?.phone);
    formLegal.status.name = newVal.value?.get_status_display;
    formLegal.amount.name = `${formatNumbers(newVal.value?.sum)} UZS`;
    formLegal.firm = newVal.value?.firm;
  },
  { deep: true }
);

const showModal = ref<boolean>(false);
const toggleModalActive = (val: boolean) => (showModal.value = val);
</script>

<style scoped></style>
