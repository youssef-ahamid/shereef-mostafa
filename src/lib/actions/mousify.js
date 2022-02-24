export default function mousify(node) {
  const follow = event => {
    node.style.top = `${event.y}px`
    node.style.left = `${event.x}px`
  }

  document.addEventListener('mousemove', follow)

  return {
    destroy() {
      document.removeEventListener('mousemove', follow)
    },
  }
}
