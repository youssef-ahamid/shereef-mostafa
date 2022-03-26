<script>
  /* props */
  export let steps = 0 // *, number of steps
  export let active = 0 // *, current step

  export let direction = 'vertical' // *, horizontal
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ direction, active })

  const activate = step => (active = step)
</script>

<div class={`${classes.stepper} ${className}`}>
  {#each [...Array(steps).keys()] as step}
    <button
      class="{classes.step} {step === active
        ? classes.active
        : classes.inactive}"
      on:click={() => {
        activate(step)
      }}
    />
  {/each}
</div>
