<script>
    export let className = ''
    export let title = ''
    export let id = title
    export let cta = null
    export let noContain = false
  
    import Title from '$lib/components/Title/index.svelte'
    import Go from '$lib/components/Go/index.svelte'
    import Button from '$lib/components/Button/index.svelte'
  
    /* styles */
    import { config } from './styles'
    $: classes = config({ noContain })
  </script>
  

<section class="{`${classes.section} ${className}`}" {id}>
    <Title line={title.length > 0}>{title}</Title>
    <div class={classes.content}>
        <slot />
        {#if cta}
            <div class={classes.ctaContainer}>
                <Go to={cta.link}>
                    <Button {...cta} />
                </Go>
            </div>
        {/if}
    </div>
</section>