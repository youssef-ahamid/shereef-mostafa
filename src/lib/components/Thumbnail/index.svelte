<script>
  /* components */
  import CustomCursor from '../Custom Cursor/index.svelte'

  /* props */
  export let src = '' // *, image url
  export let alt = '' // *, image alt
  export let fade = 'none' // *, small, medium, large
  export let cursor = null // *, cursor icon
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ fade })
</script>

<CustomCursor icon={cursor}>
  <div class={`${classes.thumbnailWrapper} ${className}`} on:click>
    <div class={classes.overlay} />
    <img class={classes.thumbnail} {src} {alt} />
  </div>
</CustomCursor>
