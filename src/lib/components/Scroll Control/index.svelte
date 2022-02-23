<script>
  /* props */
  export let indicator = true // *, false
  export let timeout = 1500 // *, scroll timeout in ms

  /* data */
  let scrollAllowed = true;
  
  /* styles */
  import { config, classes } from './styles'
  $: config({ scrollAllowed })

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()
  const handleScroll = (e) => {
    if (!scrollAllowed) return

    let up = (e.wheelDelta && e.wheelDelta > 0) || (e.deltaY && e.deltaY < 0)
    if (up) dispatch('up')
    else dispatch('down')
    scrollAllowed = false
    setTimeout(() => { 
      scrollAllowed = true 
    }, timeout)
  }

</script>

<svelte:window on:scroll|preventDefault={handleScroll} />

{#if indicator }
  <div class={classes.control}>
    <span class={classes.indicator}></span>
    <p class={classes.text}>scroll</p>
  </div>
{/if}
