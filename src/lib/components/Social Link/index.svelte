<script>
  /* props */
  export let link = '' // *, url
  export let icon = null // *, icon component
  export let redirect = true // *, false
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { classes } from './styles'
</script>

<a
  href={link}
  class={classes.link + className}
  target={redirect ? '_blank' : '_self'}
>
  <svelte:component this={icon} className={classes.icon} />
</a>
