<script>
  /* helpers */
  import { assert } from '$lib/helpers'

  /* props */
  export let type = 'text' // *, text area
  export let trim = false // *, true
  export let long = false // *, true
  export let validations = null // *, array of validation objects
  export let className = '' // *, custom wrapper classes
  export let label = '' // *, label text
  export let placeholder = '' // *, placeholder text
  export let value = '' // *, bound value

  /* data */
  $: validation = assert(validations || [], value)
  $: value = trim ? value.trim() : value 
  let clean = true
  let error = ''
  export const validate = () => {
    clean = validation.success
    error = clean ? '' : validation.failed.error
    if (clean) valid()
    else invalid()
  }

  /* styles */
  import { config } from './styles'
  $: classes = config({ type, trim, long, clean })

  /* transitions */
  import { slide } from 'svelte/transition';

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()
  const valid = () => dispatch('valid', value)
  const invalid = () => dispatch('invalid', value)
  const blur = () => {
    validate()
    dispatch('blur', value)
  }
  const focus = () => dispatch('focus', value)
</script>

<label class={classes.label + className} for={label}>
  <p class={classes.name}>
    {label}
    {#if validations && validations
        .map(_ => _.type)
        .includes('required')}
      *
    {/if}
  </p>
  {#if type == 'text'}
    <input
      bind:value
      {placeholder}
      name={label}
      class={classes.input}
      on:focus={focus}
      on:blur={blur}
    />
  {:else if type == 'text area'}
    <textarea
      bind:value
      {placeholder}
      name={label}
      class={classes.input}
      on:focus={focus}
      on:blur={blur}
    />
  {/if}
  {#if !clean }
    <h4 transition:slide={{ duration: 300 }}>{error}</h4>
  {/if}
</label>
