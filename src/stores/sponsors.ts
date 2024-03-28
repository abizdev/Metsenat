import { defineStore } from 'pinia'

import { ref } from 'vue'

import useApi from '@/plugins/axios'

export const useSponsorsStore = defineStore('sponsors', () => {
  const sponsorsList = ref(null)
  const sponsor = ref(null)
  const loading = ref<boolean>(false)

  const getSponsorsList = async (page:number = 1, limit:number = 10): Promise<void> => {
    try {
      const res = await useApi.get(`/sponsor-list/?page=${page}&page_size=${limit}`)
      sponsorsList.value = res.data.results
    } catch (error) {
      console.log('error in gettgin sposnsors list', error)
    }
  }
  const getSponsorDetail = async (id: string): Promise<void> => {
    try {
      const res = await useApi.get(`/sponsor-detail/${id}`)
      sponsor.value = res.data
    } catch (error) {
      console.log('error in getting sponsor detail', error)
    }
  }

  return { sponsorsList, loading, sponsor, getSponsorDetail, getSponsorsList }
})
