<script>
  /* props */
  export let src = '' // *, image url
  export let alt = '' // *, image alt
  export let fade = 'none' // *, small, medium, large
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ fade })
</script>

<div class={`${classes.thumbnailWrapper} ${className}`} on:click>
  <div class={classes.overlay} />
  <img class={classes.thumbnail} {src} {alt} />
</div>
