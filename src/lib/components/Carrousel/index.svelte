<script>
  /* props */
  export let items = [] // *, array of carrousel items
  export let currentStep
  export let className = '' // *, custom wrapper classes

  import CarrouselItem from '$lib/components/Carrousel Item/index.svelte'
  import List from '$lib/components/List/index.svelte'
  import Stepper from '$lib/components/Stepper/index.svelte'
  import Button from '$lib/components/Button/index.svelte'

  /* events */
  import { createEventDispatcher, onMount } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  /* methods */
  export const next = () => {
    if (currentStep != items.length - 1) currentStep++
    else dispatch('finish')
  }
  export const prev = () => {
    if (currentStep != 0) currentStep--
  }
  let selected = false
  $: remainders = Array.from(
    { length: items.length },
    (_, i) => i - currentStep
  )
  let carrouselItems = []
  export const select = num => {
    currentStep = num
    if (!carrouselItems[currentStep]) return
    if (num == items.length - 1)
      setTimeout(() => {
        dispatch('complete')
      }, 500)
    else dispatch('rewatch')
    selected = true
    carrouselItems[currentStep].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: num % 2 === 0 ? 'end' : 'start',
    })
    setTimeout(() => {
      selected = false
    }, 500)
  }

  $: select(currentStep)

  import { config } from './styles'
  $: classes = config()

  onMount(() => {
    dispatch('rewatch')
  })

  let screenWidth
  $: mobile = screenWidth < 768
</script>

<svelte:window bind:outerWidth={screenWidth} />

<div class={`${classes.carrouselWrapper} ${className}`}>
  <List {items} let:prop={item} className={classes.carrousel}>
    <div
      bind:this={carrouselItems[items.indexOf(item)]}
      class={classes.carrouselItem}
    >
      <CarrouselItem
        {...item}
        on:preview={() => {
          select(items.indexOf(item))
        }}
        {mobile}
        bind:remaining={remainders[items.indexOf(item)]}
      />
    </div>
  </List>
  {#key currentStep }
    <div class={classes.controls}>
        <Stepper
          direction="horizontal"
          steps={items.length}
          bind:active={currentStep}
          className={classes.stepper}
        />
      <div class={classes.buttons}>
        <Button
          label="prev"
          shape="ghost"
          on:click={prev}
          className={`${classes.button} ${
            currentStep === 0 ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <Button
          label="next"
          shape="ghost"
          on:click={next}
          className={`${classes.button} ${
            currentStep === items.length - 1 ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
    </div>
  {/key}
</div>
