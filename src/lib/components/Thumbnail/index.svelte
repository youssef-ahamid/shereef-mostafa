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
  <img
    on:click
    on:mouseenter
    on:mouseleave
    class={`${classes.thumbnail} ${className}`}
    {src}
    {alt}
  />
</CustomCursor>
