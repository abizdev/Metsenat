<template>
  <main>
    <MainBanner />
    
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import MainBanner from '@/components/Layout/MainBanner.vue';

import { useDashboardStore } from '@/stores/dashboard'

const dashboardStore = useDashboardStore()
dashboardStore.getDashboardTotals()
</script>