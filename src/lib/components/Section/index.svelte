<script>
    export let className = ''
    export let title = ''
    export let id = title
    export let cta = null
  
    import Title from '$lib/components/Title/index.svelte'
    import Go from '$lib/components/Go/index.svelte'
    import Button from '$lib/components/Button/index.svelte'
  
    /* styles */
    import { config } from './styles'
    $: classes = config()
  </script>
  

<section class="{`${classes.section} ${className}`}" {id}>
    <Title>{title}</Title>
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