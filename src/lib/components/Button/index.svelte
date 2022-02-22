<script>
  /* props */
  export let type = 'primary' // *, secondary
  export let shape = 'default' // *, ghost, full,
  export let icon = null // *, icon component
  export let className = '' // *, custom wrapper classes
  export let label = '' // *, button text
  export let active = true // *, false
  export let reverse = false // *, true

  /* styles */
  import { config, classes } from './styles'
  config({ type, shape, active, reverse })

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()
  const click = () => dispatch('click')
  const dblclick = () => dispatch('dblclick')
</script>

<button
  on:click={click}
  on:dblclick={dblclick}
  class={classes.button + className}
>
  <h3 class={classes.label}>
    {label}
  </h3>
  {#if !!icon}
    <span class={classes.icon}><svelte:component this={icon} /></span>
  {/if}
</button>
