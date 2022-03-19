<script>
  /* props */
  export let title = ''
  export let images = []
  export let reverse = false // *, true
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ reverse })
</script>

<div class={`${classes.feature} ${className}`}>
  <div class={classes.left}><slot name="preview" /></div>
  <div class={classes.right}>
    {#if images.length > 0 }
      {#each images as image}
        <img class={classes.image} src={image} alt={`${title} | thumbnail image | Shereef Mostafa`}>
      {/each}
    {/if}
    <h2>{title}</h2>
    <p><slot name="body" /></p>
    <div><slot name="cta" /></div>
  </div>
</div>
