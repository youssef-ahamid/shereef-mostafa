<script>
  export let className = ''
  export let to = ''
  export let text = ''
  export let redirect = false
  export let active = false
  export let activeSub = 0
  export let links = []

  import Go from '$lib/components/Go/index.svelte'
  import List from '$lib/components/List/index.svelte'

  import { slide } from 'svelte/transition'

  /* styles */
  import { config } from './styles'
  $: classes = config({ active })
</script>

<Go {to} {redirect} on:click>
  <h5 class={`${classes.link} ${className}`}>
    {#if text != ''}
      {text}
    {:else}
      <slot />
    {/if}
  </h5>
</Go>

{#if links.length > 0}
  <div transition:slide={{ duration: 300 }}>
    <List items={links} let:prop={link} className={classes.list}>
      <Go to={link.to} redirect={link.redirect}>
        <h4
          class={`${classes.sublink} ${
            active && activeSub === links.indexOf(link)
              ? classes.activeSub
              : classes.inactiveSub
          }`}
        >
          {link.text}
        </h4>
      </Go>
    </List>
  </div>
{/if}
