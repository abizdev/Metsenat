<template>
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
        <template #tableBtn>
          <button><img src="/images/eye.svg" alt="eye"></button>
        </template>
      </TableBody>

      <TableFooter @change-current-page="getList" />
    </table>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/Table/TableHead.vue';
import TableBody from '@/components/Table/TableBody.vue';
import TableFooter from '@/components/Table/TableFooter.vue'

import { computed } from 'vue';
import { useSponsorsStore } from '@/stores/sponsors';

import { formatDate, formatPhone, formatNumbers } from '@/composable/formaters'
import { statusDisplay } from '@/composable/statusDisplay'

const tableHead: string[] = ['#', 'f.i.sh.', 'Tel.Raqami', 'Homiylik summasi', 'Sarflangan summa', 'Sana', 'Holati', 'Amallar']

const sponsorsStore = useSponsorsStore()
const sponsorsList = computed(() => sponsorsStore.sponsorsList)
sponsorsStore.getSponsorsList()

const getList = (page: number) => {
  sponsorsStore.getSponsorsList(page)
}

</script>