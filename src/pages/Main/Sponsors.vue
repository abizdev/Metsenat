<template>
  <div class="container">
    <TableHead :tableHead />

  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/Table/TableHead.vue'

const tableHead: string[] = ['#', 'f.i.sh.', 'Tel.Raqami', 'Homiylik summasi', 'Sarflangan summa', 'Sana', 'Holati', 'Amallar']

</script>