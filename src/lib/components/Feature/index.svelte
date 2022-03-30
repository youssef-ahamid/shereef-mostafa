<script>
  /* props */
  export let title = ''
  export let images = []
  export let reverse = false // *, true
  export let image = {}
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ reverse })
</script>

<div class={`${classes.feature} ${className}`}>
  {#if !!image.data.src }
    <div class={classes.left}>
      <svelte:component
        this={image.component}
        {...image.data}
      />
    </div>
  {/if}
  <div class={classes.right}>
    {#if images.length > 0}
      <div>
        {#each images as image}
          <img
            class={classes.image}
            src={image}
            alt={`${title} | thumbnail image | Shereef Mostafa`}
          />
        {/each}
      </div>
    {/if}
    <div class="mb-6 mt-1">
      <h2>{title}</h2>
      <slot />
    </div>
    <div class="ml-1"><slot name="cta" /></div>
  </div>
</div>
