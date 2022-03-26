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
    let data = {}
    for (let input of inputs) {
      if (input.data.value && input.data.value.length > 0)
        data[input.data.label] = input.data.value

      input.validate()
      if (input.error) error = true
    }
    if (error) dispatch('error', data)
    else dispatch('submit', data)
  }
</script>

<form
  on:submit|preventDefault={submit}
  class={`${classes.form} + ${className}}`}
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
    <Button
      on:click={submit}
      label={button.label}
      type={button.type}
      shape={button.shape}
      icon={button.icon}
      reverse={button.reverse}
      className={classes.button}
    />
  {/if}
</form>
