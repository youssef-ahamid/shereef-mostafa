<script>
	import Button from '$lib/components/Button/index.svelte';
	import Nav from '$lib/components/Nav/index.svelte';
	import Stepper from '$lib/components/Stepper/index.svelte';
	import List from '$lib/components/List/index.svelte';
	import SocialLink from '$lib/components/Social Link/index.svelte';
	import ScrollControl from '$lib/components/Scroll Control/index.svelte';
  import { fade } from 'svelte/transition';

  /* props */
  export let cta = null // *, body text
  export let socialLinks = []
  export let title = '' // *, title text
  export let scroll = true // *, logo/image url
  export let links = [] // *, selection state
  export let number // *, page num
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
import { createEventDispatcher } from 'svelte';
import Burger from '$lib/icons/burger.svelte';
import { typewriter } from '$lib/transitions';
  $: classes = config()

  const dispatch = createEventDispatcher()  
  $: dispatch('switch', number)
 function prev () {
    if (number != 0) number --
  }
 function next () {
    if (number != 4) number ++
  }
</script>

<div class={`${classes.page} ${className}`}>
    {#if cta }
    <span out:fade={{duration:300}} in:fade={{duration:500}}>
        <Button {...cta} on:click={cta.action} className={classes.cta} />
    </span>
    {/if}
    {#key title}
        <h1 class={classes.title} in:typewriter={{speed:3, delay: 100}} out:fade={{duration:200}}>{title}</h1>
    {/key}
    <Nav {links} bind:number icon={Burger} className={classes.nav} />
    <Stepper steps={5} bind:active={number} className={classes.stepper}/>
    <slot prop={number}/>
    <List items={socialLinks} let:prop={item} className={classes.socials}>
        <SocialLink {...item} />
    </List>
    {#if scroll }
        <ScrollControl on:up={prev} on:down={next} />
    {/if}
</div>
