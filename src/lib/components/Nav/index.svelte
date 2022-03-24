<script>
	import Burger from '$lib/icons/burger.svelte';
  /* props */
  export let links = [] // *, list items
  export let icon = Burger
  export let className = '' // *, custom wrapper classes
  
  import List from '$lib/components/List/index.svelte'
  import NavLink from '$lib/components/Nav Link/index.svelte'
  
  import { clickOutside } from '$lib/actions'

  import { fly } from 'svelte/transition'
  import { number } from '$lib/stores'

  let active = false
  const toggle = () => (active = !active)

  /* styles */
  import { config } from './styles'
  $: classes = config({ active })
</script>

<div class={classes.iconWrapper} on:click={toggle}>
  <svelte:component this={icon} className={classes.icon} {active} />
</div>

{#if active}
  <nav
    class={`${classes.nav} ${className}`}
    transition:fly={{ x: -300, duration: 400 }}
    use:clickOutside
    on:outclick={toggle}
  >
    <List items={links} let:prop={item} className={classes.links}>
      <NavLink 
        {...item} 
        active={$number === links.indexOf(item)} 
        on:click={() => {
          $number = links.indexOf(item)
          active = false
        }} 
        className={classes.link}
      />
    </List>
  </nav>
{/if}
