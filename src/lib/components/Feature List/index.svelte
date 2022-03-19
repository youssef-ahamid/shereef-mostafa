<script>
  /* props */
  export let features = []
  export let zigzag = false
  export let className = ""; // *, custom wrapper classes

  import List from '$lib/components/List/index.svelte'
  import Feature from '$lib/components/Feature/index.svelte'
  import Button from '$lib/components/Button/index.svelte'

  /* styles */
  import { config } from "./styles";
  $: classes = config();
</script>

<List items={features} let:prop={feature} className={`${classes.list} ${className}`}>
    <Feature 
        reverse={ (features.indexOf(feature) % 2 === 0) && zigzag } 
        className={classes.feature}
        images={feature.images}
        title={feature.title}
    >
        {#if feature.preview}
            <svelte:component this={feature.preview.component} {...feature.preview.data} slot="preview" />
        {/if}
        {#if feature.body }
            <p>{feature.body}</p>
        {/if}
        {#if feature.cta }
            <Button slot="cta" {...feature.cta} />
        {/if}
    </Feature>
</List>
