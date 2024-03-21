<template>
  <thead>
    <tr>
      <th
        v-for="(item, key) in tableHead"
        :key
      >
        {{ item }}
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">

interface Props {
  tableHead: string[]
}

defineProps<Props>()
</script>