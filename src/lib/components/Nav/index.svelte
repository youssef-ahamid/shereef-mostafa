<script>
	import List from '$lib/components/List/index.svelte';
import { fly, fade } from 'svelte/transition';

    /* props */
  export let links = [] // *, list items
  export let number = 0
  export let icon = null
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  let classes = config()
</script>

{#if icon }
    <div class={classes.iconWrapper}>
        {#key number }
            <h3 out:fly={{ y: -50 }} in:fade={{ y: 50 }}>{number+1}</h3>
        {/key}
        <svelte:component this={icon} className={classes.icon} />
        <h3 class:opacity-75={number<links.length-1} class="transition duration-300 ease-out">{links.length}</h3>
    </div>
{/if}

<nav class={`${classes.nav} ${className}`}>
    <List items={links} let:prop={item} className={classes.links}>
        <h3 on:click={() => {number = links.indexOf(item)}} class={classes.link}>{item.text}</h3>
    </List>
</nav>