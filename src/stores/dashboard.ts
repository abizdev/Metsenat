import axios from 'axios'

import { defineStore } from 'pinia'

import { reactive, ref } from 'vue'

import type { IDashboard } from '@/types/dashboard.types'

const BASE_URL = import.meta.env.VITE_API_BASE_URL


export  const useDashboardStore = defineStore('dashboard', () => {
  const dashboardTotals = ref<null | IDashboard>(null)

  const getDashboardTotals = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/dashboard/`)
      dashboardTotals.value = await res.data
    } catch (error) {
      console.log('error in getting dashboard', error)
    }
  }


  return { dashboardTotals, getDashboardTotals }
})

