<template>
  <Banner userType="student" :user="student" />

  <section class="flex flex-col items-center justify-between mt-10 h-screen">
    <!-- info block -->
    <div class="flex flex-col bg-white rounded-xl p-8 w-198 border border-blue-50">
      <!-- title -->
      <div class="flex-y-center justify-between">
        <h3 class="text-2xl text-black font-bold family-['sf-pro-display']">Talaba haqida</h3>
        <BaseButton 
          icon="icon-edit"
          :iconLeft="true"
          text="Tahrirlash"
          variant="secondary"
        />
      </div>

      <div class="flex-center mt-8">
        <p class="text-xs text-blue bg-gray-200 py-0.5 px-3 uppercase">Asosiy ma’lumotlar</p>
        <span class="flex-grow h-px bg-blue-50"></span>
      </div>

      <!-- user info -->
      <div class="flex-y-center gap-5 w-61 mt-6">
        <span class="w-16 h-16 rounded-md bg-gray-200 border border-blue-50 flex-center flex-shrink-0">
          <img src="/images/user.svg" alt="user">
        </span>
        <h5 class="text-md text-black">{{ student?.full_name }}</h5>
      </div>

      <div class="grid grid-cols-2 mt-6">
        <!-- phone -->
        <div class="col-span-1 flex flex-col gap-3">
          <h6 class="text-xs text-gray uppercase">OTM</h6>
          <p class="text-md text-black">{{ formatPhone(student?.phone) }}</p>
        </div>
      </div>

      <div class="flex-center mt-8">
        <p class="text-xs text-blue bg-gray-200 py-0.5 px-3 uppercase">O‘qish joyi haqida ma’lumot</p>
        <span class="flex-grow h-px bg-blue-50"></span>
      </div>

      <!-- user tags -->
      <div class="grid grid-cols-2 mt-6 gap-y-6 gap-x-7">
        <!-- otm -->
        <div class="col-span-1 flex flex-col gap-3">
          <h6 class="text-xs text-gray uppercase">OTM</h6>
          <p class="text-md text-black">{{ student?.institute?.name }}</p>
        </div>

        <!-- degree -->
        <div class="col-span-1 flex flex-col gap-3">
          <h6 class="text-xs text-gray uppercase">Talabalik turi</h6>
          <p class="text-md text-black">{{ student?.type }}</p>
        </div>

        <!-- given sum -->
        <div class="col-span-1 flex flex-col gap-3">
          <h6 class="text-xs text-gray uppercase">Ajratilingan summa</h6>
          <p class="text-md text-black uppercase">{{ formatNumbers(student?.given)}}</p>
        </div>

        <!-- contract -->
        <div class="col-span-1 flex flex-col gap-3">
          <h6 class="text-xs text-gray uppercase">Kontrakt miqdori</h6>
          <p class="text-md text-black uppercase">{{ formatNumbers(student?.contract) }}</p>
        </div>
      </div>

    </div>

    <!-- table -->
    <div class="bg-white rounded-xl p-8 w-198 mt-10">
      <!-- title -->
      <div class="flex-y-center justify-between">
        <h3 class="text-2xl text-black font-bold family-['sf-pro-display']">Talabaga homiylar</h3>
        <BaseButton 
          icon="icon-add"
          :iconLeft="true"
          text="Homiy qo‘shish"
          variant="secondary"
        />
      </div>

      <!-- table content -->
      <table class="w-full mt-6" v-if="studentSponsors.length">

        <TableHead :tableHead>
          <th
            v-for="(item, key) in tableHead"
            :key
            class="text-xs text-gray uppercase"
            :class="[
              { 
                'text-left w-4': key === 0,
                'w-[222px] text-left': key === 1,
                'w-38': key === 2,
              },
            ]"
          >
            {{ item }}
          </th>
        </TableHead>

        <TableBody :list="studentSponsors">
          <!-- main info -->
          <template #content="{ user, key }">
            <td class="text-left w-4 text-sm text-black font-normal">{{ key + 1 }}</td>
            <td class="w-[222px] text-left text-sm text-black">{{ user?.full_name }}</td>
            <td class="w-36 text-sm text-black">{{ formatNumbers(user?.spent) }} <span class="text-gray">UZS</span></td>
          </template>
          <!-- actions -->
          <template #tableBtn="{ user }">
            <button>
              <img src="/images/eye.svg" alt="eye">
            </button>
          </template>
        </TableBody>
      </table>

    </div>
  
    <img src="/images/bottom.png" class="w-205" alt="bottom">
  </section>
</template>

<script setup lang="ts">
import Banner from '@/components/Layout/Banner.vue'
import BaseButton from '@/components/Base/Button.vue'
import TableHead from '@/components/Table/TableHead.vue';
import TableBody from '@/components/Table/TableBody.vue';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { formatPhone, formatNumbers } from '@/utils/formatters';
import { useStudentsStore } from '@/stores/students'

const route = useRoute()

const studentsStore = useStudentsStore()
const student = computed(() => studentsStore.student)
const studentSponsors = computed(() => studentsStore.studentSponsors)

const tableHead = ['#', 'f.i.sh', 'Ajratilingan summa', 'Amallar']

studentsStore.getStudentDetail(route.params.id)
studentsStore.getStudentSponsors(route.params.id)
</script>

<style scoped>

</style>