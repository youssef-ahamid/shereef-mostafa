<script>
  import { number, scroll } from '$lib/stores.js'
  import '$lib/styles/app.css'
  import Page from '$lib/components/Page/index.svelte'
  import { socialLinks } from '$lib/presets'
  import { goto } from '$app/navigation'
  import { browser } from '$app/env'

  let links = [
    {
      text: '',
      link: '/',
    },
    {
      text: 'bio',
      link: '/bio',
    },
    {
      text: 'music production',
      link: '/music-production',
    },
    {
      text: 'sound design',
      link: '/sound-design',
    },
    {
      text: 'contact',
      link: '/contact',
    },
  ]
  $: title = links[$number].text
  $: if (browser) {
    goto(links[$number].link)
  }

  $: cta =
    $number != 4
      ? {
          label: 'contact',
          action: () => {
            $number = 4
          },
        }
      : null
</script>

<Page
  bind:number={$number}
  scroll={$scroll}
  {links}
  {title}
  {socialLinks}
  {cta}
>
  <slot />
</Page>
