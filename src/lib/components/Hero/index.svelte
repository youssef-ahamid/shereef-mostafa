<script>
  /* props */
  export let fullHeight = false // *, true
  export let className = '' // *, custom wrapper classes

  import Go from '$lib/components/Go/index.svelte'
  import Logo from '$lib/logo.svelte'

  /* styles */
  import { config } from './styles'
  $: classes = config({ fullHeight })
</script>

<Go to="/" className={classes.logoWrapper}>
  <Logo className={classes.logo} innerCircle={classes.logoInner} outerCircle={classes.logoOuter}/>
</Go>
<div class={`${classes.hero} ${className}`}>
  {#if $$slots.cta}
    <div class={classes.cta}>
      <slot name="cta" />
    </div>
  {/if}
  {#if $$slots.left}
    <div class={classes.left}>
      <slot name="left" />
    </div>
  {/if}
  <slot />
  {#if $$slots.right}
    <div class={classes.right}>
      <slot name="right" />
    </div>
  {/if}
</div>
