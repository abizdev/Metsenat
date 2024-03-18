<template>
  <div>
    <Dashboard />
  </div>
</template>

<script setup lang="ts">
import Dashboard from '@/components/Sections/Dashboard.vue'

import { useDashboardStore } from '@/stores/dashboard'

const dashboardStore = useDashboardStore()

dashboardStore.getDashboardTotals()
</script>