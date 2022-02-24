<script>
  /* props */
  export let icon // icon component to replace cursor

  /* actions */
  import { mousify } from '$lib/actions'

  /* styles */
  import { classes } from './styles'
</script>

<span
  on:click
  on:mouseenter
  on:mouseleave
  class={classes.cursorWrapper}
>
  <slot />
</span>
<span use:mousify class={classes.cursor}>
  <svelte:component
    this={icon}
  />
</span>
