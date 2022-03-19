<script>
  export let to = ''
  export let redirect = false
  export let active = false
  export let links = []

  import Go from '$lib/components/Go/index.svelte'
  import List from '$lib/components/List/index.svelte'

  /* styles */
  import { config } from './styles'
  $: classes = config({ active })
</script>

<Go {to} {redirect}>
  <h5 class={classes.link}><slot /></h5>
</Go>

<List items={links} let:prop={link} className={classes.list}>
  <Go {...link}>
    <h4 class={classes.sublink}>{link.text}</h4>
  </Go>
</List>
