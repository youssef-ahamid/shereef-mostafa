<script>
  /* props */
  export let steps = 0 // *, number of steps
  export let active = 0 // *, current step
  export let direction = 'vertical' // *, horizontal
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config, classes } from './styles'
  config({ direction })

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()
  const activate = step => (active = step)
</script>

<div class={classes.stepper + className}>
  {#each [...Array(steps).keys()] as step}
    <span
      class="{classes.step} {step === active ? classes.active : ''}"
      on:click={() => {
        activate(step)
      }}
    />
  {/each}
</div>
