<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">

import { useDashboardStore } from '@/stores/dashboard'

const dashboardStore = useDashboardStore()
dashboardStore.getDashboardTotals()
</script>