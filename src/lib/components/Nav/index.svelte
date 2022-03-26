<script>
  import Burger from '$lib/icons/burger.svelte'
  /* props */
  export let links = [] // *, list items
  export let activeLink
  export let activeSub
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

<div
  use:clickOutside
  on:outclick={() => {
    active = false
  }}
>
  <div class={classes.iconWrapper} on:click={toggle}>
    <svelte:component this={icon} className={classes.icon} {active} />
  </div>
  <nav class={`${classes.nav} ${className}`}>
    <List items={links} let:prop={item} className={classes.links}>
      <NavLink
        {...item}
        active={activeLink === links.indexOf(item)}
        {activeSub}
        on:click={() => {
          activeLink = links.indexOf(item)
          active = false
        }}
        className={classes.link}
      />
    </List>
  </nav>
</div>
