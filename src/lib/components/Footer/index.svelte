<script>
  /* props */
  export let links = []
  export let copyright =
    'Copyright forever and ever by Samurai Software House'
  export let className = '' // *, custom wrapper classes

  import Section from '$lib/components/Section/index.svelte'
  import List from '$lib/components/List/index.svelte'
  import NavLink from '$lib/components/Nav Link/index.svelte'
  import Go from '$lib/components/Go/index.svelte'
  import Logo from '$lib/logo.svelte'

  import { socialLinks } from '$lib/stores';
  let socials = $socialLinks.filter(link => !!link.to)

  /* styles */
  import { config } from './styles'
  $: classes = config()
</script>

<Section id="footer" title=" " noContain>
  <footer class={`${classes.footer} ${className}`}>
    <nav class={classes.links}>
      <Go to="/" className={classes.logoWrapper}>
        <Logo className={classes.logo} innerCircle={classes.logoInner} outerCircle={classes.logoOuter}/>
      </Go>
      <List items={links} let:prop={link} className={classes.list}>
        <NavLink {...link} className={classes.link} />
      </List>
      <slot />
    </nav>
    <List items={socials} let:prop={link} className={classes.socials}>
      <Go to={link.to} redirect={link.redirect} className={classes.socialLink}>
        <svelte:component this={link.component} />
      </Go>
    </List>
    <h4 class={classes.copyright}>{copyright}</h4>
  </footer>
</Section>
