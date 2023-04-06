export function useTimer() {
  let last = 0
  function tick(cb: Function, ctx?: unknown) {
    function animate(time: number = 0) {
      requestAnimationFrame(animate)
      const dt = time - last
      last && cb && cb.call(ctx, dt, time)
      last = time
    }
    animate()
  }
  return { tick }
}
