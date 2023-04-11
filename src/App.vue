<template>
  <div
    ref="stage"
    class="stage w-screen h-screen"
  >
    <div
      ref="el"
      class="absolute w-32 h-32 border flex items-center justify-center"
    >Hello World</div>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <template
      v-for="i in snakeCount"
      :key="i"
    >
      <Snake
        :id="i + ''"
        ref="snakes"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import { useMouse } from './hooks/useMouse'
import { useTimer } from './hooks/useTimer'
import MyTree from './lib/behaviorTree/Tree/MyTree'
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from './lib/behaviorTree/Biz/Blackboard'
import Snake from './components/Snake.vue'
import GameObject, { Position } from './common/GameObject'
import { randomPos } from './common/Utils'

const { x, y } = useMouse()
const timer = useTimer()
const el = ref<HTMLElement>()
const stage = ref<HTMLDivElement>()
const snakes = ref<InstanceType<typeof Snake>[]>([])

BlackBoard.instance.stage = stage
BlackBoard.instance.snakes = snakes

interface Pos {
  x: number
  y: number
}

let last: Pos = { x: 0, y: 0 }
watchEffect(() => {
  moveTo({ x: x.value, y: y.value }, el.value)
})

function moveTo(pos: Pos, el?: HTMLElement) {
  return new TWEEN.Tween({ ...last, h: 0 })
    .easing(TWEEN.Easing.Back.Out)
    .interpolation(TWEEN.Interpolation.Bezier)
    .to({ ...pos, h: 360 }, 200)
    .onUpdate(({ x, y, h }) => {
      if (el) {
        el.style.setProperty('left', `${x - 64}px`)
        el.style.setProperty('top', `${y - 64}px`)
        el.style.setProperty('transform', `rotate(${x % 360}deg)`)
        el.style.setProperty('background', `hsl(${h} 100% 80%)`)
      }
    }).onComplete(() => {
      last = pos
    }).start()
}

onMounted(() => {
  initGame()
})

const snakeCount = 100
function initGame() {
  timer.tick((dt: number) => {
    TWEEN.update()
    for (const snake of snakes.value) {
      snake.render(dt)
    }
  })
}

</script>
