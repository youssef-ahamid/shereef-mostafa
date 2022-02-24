<script>
  /* props */
  export let indicator = true // *, false
  export let timeout = 1500 // *, scroll timeout in ms
  export let hijacked = true // *, false

  /* data */
  let scrollAllowed = true
  let direction = 'up'

  /* styles */
  import { config } from './styles'
  $: classes = config({ scrollAllowed, direction })

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()
  const handleScroll = e => {
    if (hijacked) e.preventDefault()

    if (!scrollAllowed) return

    scrollAllowed = false
    setTimeout(() => {
      scrollAllowed = true
    }, timeout)

    let up =
      (e.wheelDelta && e.wheelDelta > 0) || (e.deltaY && e.deltaY < 0)
    if (up) direction = 'up'
    else direction = 'down'
    dispatch(direction)
  }
</script>

<svelte:window
  on:mousewheel|nonpassive={handleScroll}
  on:scroll|nonpassive={handleScroll}
/>

{#if indicator}
  <div class={classes.control}>
    <span class={classes.indicator} />
    <p class={classes.text}>scroll</p>
  </div>
{/if}
