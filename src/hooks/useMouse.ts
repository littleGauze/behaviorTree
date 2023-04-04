import { onMounted, onUnmounted, ref } from "vue"

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  function handleMouseMove(evt: MouseEvent) {
      x.value = evt.pageX
      y.value = evt.pageY
  }

  return { x, y }
}