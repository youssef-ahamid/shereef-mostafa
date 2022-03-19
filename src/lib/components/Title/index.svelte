<script>
  /* props */
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config()
</script>

<div class={`${classes.titleWrapper} ${className}`}>
  <div class={classes.line}></div>
  <h1 class={classes.title}><slot /></h1>
</div>
