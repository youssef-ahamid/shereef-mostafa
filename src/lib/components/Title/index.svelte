<script>
  /* props */
  export let className = '' // *, custom wrapper classes
  export let line = true

  /* styles */
  import { config } from './styles'
  $: classes = config()
</script>

<div class={`${classes.titleWrapper} ${className}`}>
  {#if line }
    <div class={classes.line}></div>
  {/if}
  <h1 class={classes.title}><slot /></h1>
</div>
