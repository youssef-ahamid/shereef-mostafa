<script>
  /* props */
  export let thumbnail = {} // *, thumbnail component
  export let text = '' // *, body text
  export let videoUrl // *, video url
  export let title = '' // *, title text
  export let images = [] // *, logo/images url
  export let selected = false // *, selection state
  export let mobile = false // *, selection state
  export let remaining = 0 // *, carrousel steps to reach item
  export let className = '' // *, custom wrapper classes

  import Go from '$lib/components/Go/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Image from '$lib/components/Image/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'
  import { fade, slide } from 'svelte/transition'

  $: previewed = remaining === 0
  let itemWidth

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  /* methods */
  export const toggleSelected = isSelected => {
    // toggle/set selected state
    selected = isSelected || !selected
    if (selected) dispatch('select')
    else dispatch('deselect')
  }
  export const togglePreviewed = isPreviewed => {
    previewed = isPreviewed || !previewed // toggle/set previewed state
    if (previewed) dispatch('preview')
    else dispatch('depreview')
  }

  $: type = mobile ? 'overlay' : 'card'

  /* styles */
  import { config } from './styles'
  $: classes = config({ selected, previewed, remaining })
</script>

<div class={`${classes.carrouselItemWrapper} ${className}`}>
  <Image {...thumbnail} {type} className={classes.thumbnail} />
  <!-- {#if !!video && selected}
        <svelte:component this={video.component} {...video.options} className={classes.video} />
    {/if} -->
  <div class={classes.infoContainer}>
    <!-- {#if previewed } -->
    <h2>{title}</h2>
    <p>{text}</p>
    <!-- {/if} -->
    {#if videoUrl}
      <Go to={videoUrl} redirect>
        <Button
          shape="round"
          icon={Arrow}
          label="watch"
          className="-ml-2"
        />
      </Go>
    {/if}

    {#if images.length > 0}
      {#each images as img}
        <img {...img} class={classes.logo} />
      {/each}
    {/if}
  </div>
</div>
