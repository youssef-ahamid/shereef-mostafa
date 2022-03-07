<script>
  /* props */
  export let uid // *, used for identifying the component externally. must be unique
  export let thumbnail = {} // *, thumbnail component
  // export let video = null // *, video url
  export let text = '' // *, body text
  export let title = '' // *, title text
  export let image = null // *, logo/image url
  export let selected = false // *, selection state
  export let remaining = 0 // *, carrousel steps to reach item
  export let className = '' // *, custom wrapper classes
  
  $: previewed = remaining === 0
  let itemWidth
  
  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()
  
  /* methods */
  export const toggleSelected = isSelected => {
    // toggle/set selected state
    selected = isSelected || !selected
    if (selected) dispatch('select', uid)
    else dispatch('deselect', uid)
  }
  export const togglePreviewed = isPreviewed => {
    previewed = isPreviewed || !previewed // toggle/set previewed state
    if (previewed) dispatch('preview', uid)
    else dispatch('depreview', uid)
  }

  /* styles */
  import { config } from './styles'
  $: classes = config({ selected, previewed, remaining })
</script>

<div
  class={`${classes.carrouselItemWrapper} ${className}`}
  on:click={() => {
    togglePreviewed(true)
  }}
  bind:clientWidth={itemWidth}
  style={`transform: translateX(${remaining*itemWidth}}px)`}
>
  <svelte:component
    this={thumbnail.component}
    {...thumbnail.data}
    className={classes.thumbnail}
  />
  <!-- {#if !!video && selected}
        <svelte:component this={video.component} {...video.options} className={classes.video} />
    {/if} -->
  <div class={classes.infoContainer}>
    {#if image}
      <img src={image} alt={title} class={classes.logo} />
    {/if}
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
</div>
