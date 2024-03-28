<template>
  <div class="bg-white">
    <div class="flex-y-center justify-between container py-6">
      <div class="flex-center gap-3">
        <RouterLink :to="{ name: backLink }">
          <i class="icon-arrow-left"></i>
        </RouterLink>
        <h2 class="text-2xl text-black font-[sf-pro-display]">{{ user?.full_name }}</h2>
        <span class="text-xs font-normal rounded-md py-1.5 px-3" :class="userStatusDisplay(user?.get_status_display)" v-if="userType === 'sponsor'">{{ user?.get_status_display }}</span>
      </div>
  
      <BaseButton 
        icon="icon-add"
        :iconLeft="true"
        text="Homiy qo‘shish"
        variant="secondary"
        v-if="userType === 'student'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/Base/Button.vue'

import { computed } from 'vue';

import { userStatusDisplay } from '@/utils/statusDisplay'

interface IUser {
  id: string,
  full_name: string,
  get_status_display: string
}

const props = defineProps<{ userType: string, user: IUser | null }>()

const backLink = computed(() => props.userType === 'student' ? 'MainStudents' : 'MainSponsors')
</script>