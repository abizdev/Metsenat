import { defineStore } from 'pinia'

import { ref } from 'vue'

import useApi from '@/plugins/axios'

export const useStudentsStore = defineStore('students', () => {
  const studentsList = ref(null)
  const loading = ref<boolean>(false)

  const getStudentsList = async (page:number = 1, limit:number = 10) => {
    try {
      const res = await useApi.get(`/student-list/?page=${page}&page_size=${limit}`)
      studentsList.value = res.data.results
    } catch (error) {
      console.log('error in gettgin sposnsors list', error)
    }
  }

  return { studentsList, loading, getStudentsList }
})
