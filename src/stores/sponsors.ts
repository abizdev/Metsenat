import { defineStore } from 'pinia'

import { ref } from 'vue'

import { useApi } from '@/composable/useApi'

export const useSponsorsStore = defineStore('sponsors', () => {
  const sponsorList = ref(null)
  const loading = ref<boolean>(false)

  const getSponsorsList = async (page:number = 1, limit:number = 10) => {
    try {
      const res = await useApi.get(`/sponsor-list/?page=${page}&page_size=${limit}`)
      sponsorList.value = res.data.results
    } catch (error) {
      console.log('error in gettgin sposnsors list', error)
    }
  }

  return { sponsorList, loading, getSponsorsList }
})
