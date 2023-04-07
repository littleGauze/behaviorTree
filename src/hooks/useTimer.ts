export function useTimer() {
  function tick(cb: Function, ctx?: unknown) {
    let last = 0
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
