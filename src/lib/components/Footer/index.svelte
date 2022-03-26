<script>
  /* props */
  export let links = []
  export let copyright =
    'Copyright forever and ever by Samurai Software House'
  export let className = '' // *, custom wrapper classes

  import Section from '$lib/components/Section/index.svelte'
  import List from '$lib/components/List/index.svelte'
  import NavLink from '$lib/components/Nav Link/index.svelte'

  /* styles */
  import { config } from './styles'
  $: classes = config()
</script>

<Section id="footer" title=" " noContain>
  <footer class={`${classes.footer} ${className}`}>
    <nav class={classes.links}>
      <List items={links} let:prop={link} className={classes.list}>
        <NavLink {...link} className={classes.link} />
      </List>
      <slot />
    </nav>
    <h4 class={classes.copyright}>{copyright}</h4>
  </footer>
</Section>
