<script>
  /* props */
  export let reverse = false // *, true
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ reverse })
</script>

<div class={`${classes.feature} ${className}`}>
  <div class={classes.left}><slot name="preview" /></div>
  <div class={classes.right}>
    <span class={classes.image}><slot name="image" /></span>
    <h2><slot name="title" /></h2>
    <p><slot name="body" /></p>
    <div><slot name="cta" /></div>
  </div>
</div>
