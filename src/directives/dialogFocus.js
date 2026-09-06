const states = new WeakMap()
const focusable =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'

export default {
  mounted(el) {
    const previous = document.activeElement
    el.tabIndex = -1
    const candidates = () =>
      [...el.querySelectorAll(focusable)].filter(
        (node) => node.getClientRects().length && !node.closest('[inert]'),
      )
    const onKey = (event) => {
      if (event.key !== 'Tab') return
      const items = candidates()
      const first = items[0] || el
      const last = items.at(-1) || el
      if (
        !items.length ||
        (event.shiftKey && [first, el].includes(document.activeElement)) ||
        (!event.shiftKey && document.activeElement === last)
      ) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
      }
    }
    el.addEventListener('keydown', onKey)
    const frame = requestAnimationFrame(() =>
      (candidates()[0] || el).focus({ preventScroll: true }),
    )
    states.set(el, { previous, onKey, frame })
  },
  beforeUnmount(el) {
    const state = states.get(el)
    if (!state) return
    cancelAnimationFrame(state.frame)
    el.removeEventListener('keydown', state.onKey)
    if (state.previous?.isConnected) state.previous.focus({ preventScroll: true })
    states.delete(el)
  },
  getSSRProps() {
    return {}
  },
}
