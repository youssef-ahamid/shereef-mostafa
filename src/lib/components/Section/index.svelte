<script>
  export let className = ''
  export let title = ''
  export let id = title
  export let cta = null
  export let noContain = false
  export let animateIn = 'fade'

  import Title from '$lib/components/Title/index.svelte'
  import Go from '$lib/components/Go/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import AnimateOnEnterView from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  /* styles */
  import { config } from './styles'
  $: classes = config({ noContain })
</script>

<AnimateOnEnterView type={animateIn}>
  <section class={`${classes.section} ${className}`} {id}>
    <Title line={title.length > 0}>{title}</Title>
    <div class={classes.content}>
      <slot />
      {#if cta}
        <div class={classes.ctaContainer}>
          <Go to={cta.link}>
            <Button
              label={cta.label}
              type={cta.type}
              shape={cta.shape}
              icon={cta.icon}
              reverse={cta.reverse}
              className={cta.className}
            />
          </Go>
        </div>
      {/if}
    </div>
  </section>
</AnimateOnEnterView>
