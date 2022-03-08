<script>
  /* props */
  export let items = [] // *, array of carrousel items
  export let currentStep = 0 // *, starting step
  export let className = '' // *, custom wrapper classes

  import CarrouselItem from '$lib/components/Carrousel Item/index.svelte'
  import List from '$lib/components/List/index.svelte'
  import Stepper from '$lib/components/Stepper/index.svelte'
  import Button from '$lib/components/Button/index.svelte'

  import Arrow from '$lib/icons/arrow.svelte'

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  /* methods */
  export const next = () => {
    // toggle/set selected state
    if (currentStep != items.length - 1) currentStep++
    else dispatch('complete')
  }
  export const prev = () => {
    if (currentStep != 0) currentStep--
  }
  export const select = (num = currentStep) => (currentStep = num)
  let width
  $: listStyle = `transform: translateX(-${currentStep * width / items.length}}px`

  /* styles */
  import { config } from './styles'
  $: classes = config()
</script>

<div class={`${classes.carrouselWrapper} ${className}`}>
  <List {items} let:prop={item} bind:clientWidth={width} className={classes.carrousel} bind:styles={listStyle}>
    <CarrouselItem
      {...item}
      on:preview={() => {
        select(items.indexOf(item))
      }}
      remaining={items.indexOf(item) - currentStep}
      className={classes.carrouselItem}
    />
  </List>
  <div class={classes.controls}>
    <Stepper
      direction="horizontal"
      steps={items.length}
      bind:active={currentStep}
      className={classes.stepper}
    />
    <Button
      label="next"
      icon={Arrow}
      shape="ghost"
      on:click={next}
      className={classes.button}
    />
  </div>
</div>
