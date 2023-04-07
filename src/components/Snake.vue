<template>
  <div
    ref="snake"
    class="snake flex items-center justify-center border border-solid border-gray-600 w-12 h-12"
  >
    <span class="text-lg font-bold">0</span>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const snake = ref<HTMLDivElement>()

</script>