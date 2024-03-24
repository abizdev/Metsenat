<template>
  <div class="container mt-12">
    <table class="w-full">
      <TableHead :tableHead ref="head">
        <th
          v-for="(item, key) in tableHead"
          :key
          class="text-xs text-gray uppercase"
          :class="[
            { 
              'text-left w-[9px]': key === 0,
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
        <template #content="{ sponsor, key }">
          <td class="text-left w-[9px] text-sm text-black font-normal">{{ key + 1 }}</td>
          <td class="w-[222px] text-left text-sm text-black">{{ sponsor?.full_name }}</td>
          <td class="w-32 text-xs text-black font-normal">{{ formatPhone(sponsor?.phone) }}</td>
          <td class="w-[132px] text-sm text-black">{{ formatSum(sponsor?.sum) }} <span class="text-gray">UZS</span></td>
          <td class="w-36 text-sm text-black">{{ formatSum(sponsor?.spent) }} <span class="text-gray">UZS</span></td>
          <td class="w-[77px] text-sm text-black font-normal">{{ formatDate(sponsor?.created_at) }}</td>
          <td class="w-[103px] text-sm text-black font-normal" :class="statusDisplay(sponsor?.get_status_display)">
            {{ sponsor?.get_status_display }}
          </td>
        </template>
        <!-- actions -->
        <template #tableBtn>
          <button><img src="/public/images/eye.svg" alt="eye"></button>
        </template>
      </TableBody>
    </table>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/Table/TableHead.vue';
import TableBody from '@/components/Table/TableBody.vue';

import { computed } from 'vue';
import { useSponsorsStore } from '@/stores/sponsors';

import { formatDate, formatPhone, formatSum } from '@/composable/formaters'
import { statusDisplay } from '@/composable/statusDisplay'

const sponsorsStore = useSponsorsStore()
const sponsorsList = computed(() => sponsorsStore.sponsorList)
sponsorsStore.getSponsorsList()

const tableHead: string[] = ['#', 'f.i.sh.', 'Tel.Raqami', 'Homiylik summasi', 'Sarflangan summa', 'Sana', 'Holati', 'Amallar']
</script>