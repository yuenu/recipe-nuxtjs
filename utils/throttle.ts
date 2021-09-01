/**
 * 簡配版 throttle
 *
 * @param {Function} func  The function to throttle.
 * @param {Number} wait    The number of milliseconds to throttle invocations to.
 */
export function throttle<T extends (...args: any) => any>(
  func: T,
  wait: number = 250
) {
  let isBusy = false
  return function <T>(this: T, ...args: any[]) {
    if (!isBusy) {
      isBusy = true
      func.apply(this, args)
      setTimeout(() => {
        isBusy = false
      }, wait)
    }
  }
}
