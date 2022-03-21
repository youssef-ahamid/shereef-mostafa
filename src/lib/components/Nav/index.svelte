<script>
  /* props */
  export let links = [] // *, list items
  export let icon = null
  export let className = '' // *, custom wrapper classes
  
  import List from '$lib/components/List/index.svelte'
  import NavLink from '$lib/components/Nav Link/index.svelte'
  
  import { slide } from 'svelte/transition'
  import { number } from '$lib/stores'

  let active = false
  const toggle = () => (active = !active)

  /* styles */
  import { config } from './styles'
  let classes = config()
</script>

<div class={classes.iconWrapper} on:click={toggle}>
  {#key $number}
    <h3 transition:slide={{ duration: 500 }}>{$number + 1}</h3>
  {/key}
  <svelte:component this={icon} className={classes.icon} {active} />
  <h3
    class:opacity-75={$number < links.length - 2}
    class="transition duration-300 ease-out"
  >
    {links.length - 1}
  </h3>
</div>

{#if active}
  <nav
    class={`${classes.nav} ${className}`}
    transition:slide={{ duration: 400 }}
  >
    <List items={links} let:prop={item} className={classes.links}>
      <NavLink 
        {...item} 
        active={$number === links.indexOf(item)} 
        on:click={() => {
          $number = links.indexOf(item)
          active = false
        }} 
        className={""}
      />
    </List>
  </nav>
{/if}
