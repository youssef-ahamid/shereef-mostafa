<script>
  export let type = 'fade'

  let element
  let intersecting = false

  import { inView } from '$lib/actions'

  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  const enter = () => {
    intersecting = true
    dispatch('enter')
  }

  const exit = () => {
    intersecting = false
    dispatch('exit')
  }

  /* styles */
  import { stylus } from '$lib/helpers'
  import { animationWrapper } from './styles'

  $: wrapper = stylus(animationWrapper({ type, intersecting }))
</script>

<div
  use:inView={{ bottom: 50 }}
  on:enter={enter}
  on:exit={exit}
  class={wrapper.classes}
>
  <slot />
</div>
