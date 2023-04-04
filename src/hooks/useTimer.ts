export function useTimer(interval = 100) {
  function tick(cb: Function, ctx?: unknown) {
    cb.call(ctx)
    setTimeout(() => {
      tick(cb, ctx)
    }, interval)
  }
  return { tick }
}