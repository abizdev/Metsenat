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
              'w-[68px]': key === 5,
              'w-[103px]': key === 6,
            },
          ]"
        >
          {{ item }}
        </th>
      </TableHead>
      <TableBody>
        <td class="text-left w-[9px] text-sm text-black font-normal">1</td>
        <td class="w-[222px] text-left text-sm text-black">Alimov Abror Xabibullayevich</td>
        <td class="w-32 text-sm text-black font-normal">+99899 973-72-60</td>
        <td class="w-132 text-sm text-black">30 000 000 <span class="text-gray">UZS</span></td>
        <td class="w-36 text-sm text-black">0 <span class="text-gray">UZS</span></td>
        <td class="w-[68px] text-sm text-black font-normal">15.01.2021</td>
        <td class="w-[103px] text-sm text-black font-normal">Yangi</td>
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

import { onMounted, ref } from 'vue';

const head = ref()

onMounted(() => {
  console.log(head.value)
})

const tableHead: string[] = ['#', 'f.i.sh.', 'Tel.Raqami', 'Homiylik summasi', 'Sarflangan summa', 'Sana', 'Holati', 'Amallar']
</script>