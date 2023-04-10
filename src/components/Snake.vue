<template>
  <div
    ref="snake"
    class="absolute snake flex items-center justify-center w-16 h-16 shadow rounded-full"
  >
    <span class="text-lg font-bold text-gray-500">{{ id }}</span>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import Snake from '../game/Snake'
import { Position } from '../common/GameObject'
import { computed } from '@vue/reactivity'
import BlackBoard from '../lib/behaviorTree/Biz/Blackboard'

const snake = ref<HTMLDivElement>()

const props = defineProps<{
  id: string
}>()

const s = new Snake(props.id, snake)

defineExpose({
  s,
  move(pos: Position) {
    s.pos = pos
  },
  render(dt?: number) {
    s.render(dt)
  }
})

</script>