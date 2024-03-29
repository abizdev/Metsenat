import { defineStore } from 'pinia'

import { ref } from 'vue'

import useApi from '@/plugins/axios'

export const useStudentsStore = defineStore('students', () => {
  const studentsList = ref(null)
  const studentSponsors = ref(null)
  const student = ref(null)
  const loading = ref<boolean>(false)

  const getStudentsList = async (page:number = 1, limit:number = 10) => {
    try {
      const res = await useApi.get(`/student-list/?page=${page}&page_size=${limit}`)
      studentsList.value = res.data.results
    } catch (error) {
      console.log('error in gettgin sposnsors list', error)
    }
  }
  const getStudentDetail = async (id: string) => {
    try {
      const res = await useApi.get(`/student-detail/${id}`)
      student.value = res.data
    } catch (error) {
      console.log('error in getting student detail', error)
    }
  }
  const getStudentSponsors = async (id: string) => {
    try {
      const res = await useApi.get(`/student-sponsor/${id}`)
      studentSponsors.value = res.data.sponsors
    } catch (error) {
      console.log('error in getting student detail', error)
    }
  }

  return { studentsList, loading, student, studentSponsors, getStudentSponsors, getStudentDetail, getStudentsList }
})
