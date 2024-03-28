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
        />
      </div>

      <!-- user info -->
      <div class="flex-y-center gap-5 w-61 mt-8">
        <span class="w-16 h-16 rounded-md bg-gray-200 border border-blue-50 flex-center flex-shrink-0">
          <img src="/images/user.svg" alt="user">
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
  
    <img src="/images/bottom.png" class="w-205" alt="bottom">
  </section>
</template>

<script setup lang="ts">
import Banner from '@/components/Layout/Banner.vue'
import BaseButton from '@/components/Base/Button.vue'

import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { formatPhone, formatNumbers } from '@/utils/formatters';
import { useSponsorsStore } from '@/stores/sponsors'

const route = useRoute()

const sponsorsStore = useSponsorsStore()
const sponsor = computed(() => sponsorsStore.sponsor)

sponsorsStore.getSponsorDetail(route.params.id)
</script>

<style scoped>

</style>