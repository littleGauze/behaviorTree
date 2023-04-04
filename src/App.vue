<template>
  <div>Hello World</div>
  <div>x: {{ x }}</div>
  <div>y: {{ y }}</div>
</template>

<script setup lang="ts">
import { useMouse } from './hooks/useMouse'
import { useTimer } from './hooks/useTimer'
import MyTree from './lib/behaviorTree/Tree/MyTree'

const { x, y } = useMouse()
const timer = useTimer()

const myTree = new MyTree()

timer.tick(() => {
  myTree.root?.run()
})
</script>
