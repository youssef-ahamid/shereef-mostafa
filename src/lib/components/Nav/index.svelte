<script>
  import List from '$lib/components/List/index.svelte'
  import { slide } from 'svelte/transition'

  /* props */
  export let links = [] // *, list items
  export let number = 0
  export let icon = null
  export let className = '' // *, custom wrapper classes

  let active = false
  const toggle = () => (active = !active)

  /* styles */
  import { config } from './styles'
  let classes = config()
</script>

<div class={classes.iconWrapper} on:click={toggle}>
  {#key number}
    <h3 transition:slide={{ duration: 500 }}>{number + 1}</h3>
  {/key}
  <svelte:component this={icon} className={classes.icon} {active} />
  <h3
    class:opacity-75={number < links.length - 1}
    class="transition duration-300 ease-out"
  >
    {links.length}
  </h3>
</div>

{#if active}
  <nav
    class={`${classes.nav} ${className}`}
    transition:slide={{ duration: 400 }}
  >
    <List items={links} let:prop={item} className={classes.links}>
      {#if item.text != ''}
        <button
          on:click={() => {
            number = links.indexOf(item)
            active = false
          }}
        >
          <h3
            class={`${classes.link} ${
              number === links.indexOf(item)
                ? classes.active
                : classes.inactive
            }`}
          >
            {item.text}
          </h3>
        </button>
      {/if}
    </List>
  </nav>
{/if}
