<script>
  /* props */
  export let type = 'custom'
  export let size = 'md'
  export let src = ''
  export let alt = ''
  export let clip = false
  export let className = '' // *, custom wrapper classes

  import Window from '$lib/svgs/clippers/window.svelte'
  /* styles */
  import { stylus } from '$lib/helpers'
  import { imgWrapper, imgOverlay, img } from './styles'

  $: wrapper = stylus(imgWrapper({ type, size }))
  $: overlay = stylus(imgOverlay({ type, src, size }))
  $: image = stylus(img({ type, size }))
</script>

<div class={`${wrapper.classes} ${className}`} style={wrapper.styles}>
  <!-- svelte-ignore component-name-lowercase -->
  <img {src} {alt} class={image.classes} style={image.styles} />
  {#if clip}
    <Window className={overlay.classes} />
  {:else}
    <div class={overlay.classes} style={overlay.styles} />
  {/if}
</div>
