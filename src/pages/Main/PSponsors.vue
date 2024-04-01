<template>
  <MainBanner @open-modal="toggleModal" />

  <div class="container mt-12 mb-20">
    <table class="w-full">
      <TableHead :tableHead ref="head">
        <th
          v-for="(item, key) in tableHead"
          :key
          class="text-xs text-gray uppercase"
          :class="[
            { 
              'text-left w-4': key === 0,
              'w-[222px] text-left': key === 1,
              'w-32': key === 2,
              'w-132': key === 3,
              'w-36': key === 4,
              'w-[77px]': key === 5,
              'w-[103px]': key === 6,
            },
          ]"
        >
          {{ item }}
        </th>
      </TableHead>

      <TableBody :list="sponsorsList">
        <!-- main info -->
        <template #content="{ user, key }">
          <td class="text-left w-4 text-sm text-black font-normal">{{ key + 1 }}</td>
          <td class="w-[222px] text-left text-sm text-black">{{ user?.full_name }}</td>
          <td class="w-32 text-xs text-black font-normal">{{ formatPhone(user?.phone) }}</td>
          <td class="w-[132px] text-sm text-black">{{ formatNumbers(user?.sum) }} <span class="text-gray">UZS</span></td>
          <td class="w-36 text-sm text-black">{{ formatNumbers(user?.spent) }} <span class="text-gray">UZS</span></td>
          <td class="w-[77px] text-sm text-black font-normal">{{ formatDate(user?.created_at) }}</td>
          <td class="w-[103px] text-sm text-black font-normal" :class="statusDisplay(user?.get_status_display)">
            {{ user?.get_status_display }}
          </td>
        </template>
        <!-- actions -->
        <template #tableBtn="{ user }">
          <RouterLink :to="{ name: 'Sponsor', params: { id: user.id } }">
            <img src="/images/eye.svg" alt="eye">
          </RouterLink>
        </template>
      </TableBody>

      <TableFooter @change-current-page="getList" />
    </table>
  </div>

  <CModal title="filter" :show="showModal" @close="toggleModal">
    <template #content>
      <!-- status -->
      <FormGroup label="Ariza holati" id="status">
        <FormSelect :options ref="select" />
      </FormGroup>

      <!-- sponsored sum -->
      <FormGroup label="Homiylik summasi" id="sponsored_sum">
        <div class="grid grid-cols-4 gap-3">
          <FormRadio
            v-for="(item, key) in sponsoringSum"
            :key
            :item="item"
            v-model:model-value="form.radio" 
          />
        </div>
      </FormGroup>

      <!-- calendar -->
      <FormGroup label="Homiylik summasi" id="Sana">
        <div class="relative self-start">
          <VDatePicker 
            v-model.range="range" 
            mode="dateTime" 
            class="calendar abosolute -top-70 -left-0.5 z-30" 
            v-if="calendarActive" 
          />
          <div class="py-3 px-4 bg-sky/20 border border-sky rounded-md flex-y-center justify-between" @click="toggleCalendarActive()">
            <span class="text-sm text-blue-700/35 font-normal">{{ range.start }} - {{ range.end }}</span>
            <i class="icon-calendar"></i>
          </div>
        </div>
      </FormGroup>
    </template>

    <template #footer>
      <BaseButton 
        icon="icon-eye"
        :iconLeft="true"
        variant="outline"
        text="Tozalash"
      />
      <BaseButton 
        icon="icon-eye"
        :iconLeft="true"
        variant="primary"
        text="Natijalarni ko‘rish"
        @click="toggleModal(false)"
      />
    </template>
  </CModal>
</template>

<script setup lang="ts">
import MainBanner from '@/components/Layout/MainBanner.vue';
import TableHead from '@/components/Table/TableHead.vue';
import TableBody from '@/components/Table/TableBody.vue';
import TableFooter from '@/components/Table/TableFooter.vue'
import FormSelect from '@/components/Form/Select.vue';
import FormGroup from '@/components/Form/Group.vue';
import FormRadio from '@/components/Form/Radio.vue';
import BaseButton from '@/components/Base/Button.vue';
import CModal from '@/components/Common/CModal.vue';

import { computed, ref, watch } from 'vue';
import { useSponsorsStore } from '@/stores/sponsors';

import { formatDate, formatPhone, formatNumbers } from '@/utils/formatters'
import { statusDisplay } from '@/utils/statusDisplay'

const tableHead: string[] = ['#', 'f.i.sh.', 'Tel.Raqami', 'Homiylik summasi', 'Sarflangan summa', 'Sana', 'Holati', 'Amallar']
const options: string[] = ['Barchasi', 'Yangi', 'Moderatsiyada', 'Tasdiqlangan', 'Bekor qilingan']
const sponsoringSum: { id: number, sum: string | number }[] = [
  {
    id: Math.random(),
    sum: 'Barchasi',
  },
  {
    id: Math.random(),
    sum: 1000000,
  },
  {
    id: Math.random(),
    sum: 5000000,
  },
  {
    id: Math.random(),
    sum: 7000000,
  },
  {
    id: Math.random(),
    sum: 10000000,
  },
  {
    id: Math.random(),
    sum: 30000000,
  },
  {
    id: Math.random(),
    sum: 50000000,
  },
]

const sponsorsStore = useSponsorsStore()
const sponsorsList = computed(() => sponsorsStore.sponsorsList)
sponsorsStore.getSponsorsList()

const getList = (page: number) => sponsorsStore.getSponsorsList(page)

const showModal = ref<boolean>(false)
const toggleModal = (val: boolean) => showModal.value = val

const form = {
  radio: null
}

const calendarActive = ref(false)

const range = ref({ start: '01.01.2024', end: '01.02.2024' });

const toggleCalendarActive = () => calendarActive.value = !calendarActive.value

watch(range, (calendarDate) => {
  range.value.start = formatDate(calendarDate.start)
  range.value.end = formatDate(calendarDate.end)  
})
</script>

<style>
.vc-time-picker {
  display: none !important;
}
</style>