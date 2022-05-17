<script>
  /* props */
  export let features = []
  export let zigzag = false
  export let grid = false
  export let className = '' // *, custom wrapper classes

  import List from '$lib/components/List/index.svelte'
  import Feature from '$lib/components/Feature/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Go from '$lib/components/Go/index.svelte'

  /* styles */
  import { config } from './styles'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'
  $: classes = config({ grid })
</script>

<List
  items={features}
  let:prop={feature}
  className={`${classes.list} ${className}`}
>
  <Animateonenterview
    type={features.indexOf(feature) % 2 === 0 && zigzag
      ? 'flyLeft'
      : 'flyRight'}
  >
    <Feature
      reverse={features.indexOf(feature) % 2 === 1 && zigzag}
      className={classes.feature}
      images={feature.images}
      title={feature.title}
      image={feature.preview}
      collapse={feature.collapse}
    >
      {#if feature.body}
        <p>{feature.body}</p>
      {/if}
      {#if !!feature.cta}
        <Go to={feature.cta.link} redirect={feature.cta.redirect} slot="cta">
          <Button
            label={feature.cta.label}
            type={feature.cta.type}
            shape={feature.cta.shape}
            icon={feature.cta.icon}
            reverse={feature.cta.reverse}
            className={feature.cta.className}
          />
        </Go>
      {/if}
    </Feature>
  </Animateonenterview>
</List>
