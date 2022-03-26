<script>
  /* props */
  export let features = []
  export let zigzag = false
  export let className = ""; // *, custom wrapper classes

  import List from '$lib/components/List/index.svelte'
  import Feature from '$lib/components/Feature/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Go from '$lib/components/Go/index.svelte'

  /* styles */
  import { config } from "./styles";
  $: classes = config();
</script>

<List items={features} let:prop={feature} className={`${classes.list} ${className}`}>
    <Feature 
        reverse={ (features.indexOf(feature) % 2 === 1) && zigzag } 
        className={classes.feature}
        images={feature.images}
        title={feature.title}
    >
        <span slot="preview"><svelte:component this={feature.preview.component} {...feature.preview.data} /></span> 
        {#if feature.body }
            <p>{feature.body}</p>
        {/if}
        {#if !!feature.cta }
            <Go to={feature.cta.link} slot="cta">
                <Button  {...feature.cta} />
            </Go>
        {/if}
    </Feature>
</List>
