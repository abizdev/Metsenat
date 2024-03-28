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
              'w-28': key === 2,
              'w-50': key === 3,
              'w-[153px]': key === 4,
              'w-[132px]': key === 5,
            },
          ]"
        >
          {{ item }}
        </th>
      </TableHead>

      <TableBody :list="studentsList">
        <!-- main info -->
        <template #content="{ user, key }">
          <td class="text-left w-4 text-sm text-black font-normal">{{ key + 1 }}</td>
          <td class="w-[222px] text-left text-sm text-black">{{ user?.full_name }}</td>
          <td class="w-28 text-sm text-black">{{ user?.type }}</td>
          <td class="w-50 text-xs text-black font-normal">{{ user?.institute?.name }}</td>
          <td class="w-[153px] text-sm text-black">{{ formatNumbers(user?.given) }} <span class="text-gray">UZS</span></td>
          <td class="w-[132px] text-sm text-black">{{ formatNumbers(user?.contract) }} <span class="text-gray">UZS</span></td>
        </template>
        <!-- actions -->
        <template #tableBtn="{ user }">
          <RouterLink :to="{ name: 'Student', params: { id: user.id } }">
            <img src="/images/eye.svg" alt="eye">
          </RouterLink>
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
import { useStudentsStore } from '@/stores/students';

import { formatNumbers } from '@/utils/formatters'

const tableHead: string[] = ['#', 'f.i.sh.', 'Talabalik turi', 'OTM', 'Ajratilingan summa', 'Kontrakt miqdori', 'Amallar']

const studentsStore = useStudentsStore()
const studentsList = computed(() => studentsStore.studentsList)
studentsStore.getStudentsList()

const getList = (page: number) => {
  studentsStore.getStudentsList(page)
}

</script>