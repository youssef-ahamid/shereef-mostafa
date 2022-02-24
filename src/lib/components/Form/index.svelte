<script>
  /* components */
  import Button from '$lib/components/Button/index.svelte'

  /* props */
  export let inputs = [] // *, array of inputs
  export let button = null // *, action object
  export let className = '' // *, custom wrapper classes

  /* data */
  $: errors = inputs.map(input => {
    return input.error
  })
  $: error = errors.includes(true)

  /* styles */
  import { classes } from './styles'

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()
  const submit = () => {
    let data = inputs.map(input => {
      input.validate()
      if (input.error) error = true
      
      return {
        value: input.data.value,
        key: input.data.label,
        error: input.error,
      }
    })
    if (error) dispatch('error', data)
    else dispatch('submit', data)
  }
</script>

<form
  on:submit|preventDefault={submit}
  class={classes.form + className}
>
  {#each inputs as input}
    <svelte:component
      this={input.component}
      {...input.data}
      bind:value={input.data.value}
      bind:validate={input.validate}
      on:invalid={() => {
        input.error = true
      }}
      on:valid={() => {
        input.error = false
      }}
    />
  {/each}
  {#if !!button}
    <Button {...button} />
  {/if}
</form>
