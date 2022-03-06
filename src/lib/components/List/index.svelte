<script>
  /* props */
  export let items = [] // *, list items
  export let className = '' // *, custom wrapper classes
  console.log(items)

  /* styles */
  import { config } from './styles'
  let classes = config()
</script>

<ul class={`${classes.list} + ${className}`}>
  {#each items as item}
    <li class={classes.listItem}>
      <slot prop={item} />
    </li>
  {/each}
</ul>
