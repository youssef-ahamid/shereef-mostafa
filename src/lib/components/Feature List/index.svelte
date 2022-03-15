<script>
  /* props */
  export let features = []
  export let className = ""; // *, custom wrapper classes

  import List from '$lib/components/List/index.svelte'
  import Feature from '$lib/components/Feature/index.svelte'
  import Button from '$lib/components/Button/index.svelte'

  /* styles */
  import { config } from "./styles";
  $: classes = config();
</script>

<List items={features} let:prop={feature} className={`${classes.list} ${className}`}>
    <Feature reverse={ features.indexOf(feature) % 2 === 0 } className={classes.feature}>
        {#if feature.preview}
            <svelte:component this={feature.preview.component} {...feature.preview.data} slot="preview" />
        {/if}
        {#if feature.image }
            <img slot="image" src={feature.image} alt={feature.title || feature.body}>
        {/if}
        {#if feature.title }
            <svelte:fragment slot="title">{feature.title}</svelte:fragment>
        {/if}
        {#if feature.body }
            <svelte:fragment slot="body">{feature.body}</svelte:fragment>
        {/if}
        {#if feature.cta }
            <Button slot="cta" {...feature.cta} />
        {/if}
    </Feature>
</List>
