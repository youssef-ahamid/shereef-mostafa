<script context="module">
  export const prerender = true
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
    {
      text: ' ',
      link: '/thankyou',
    },
  ]

  export async function load({ url }) {
    let num = 0
    for (const link of links) {
      if (url.pathname == link.link) {
        num = links.indexOf(link)
        break
      }
    }

    return {
      props: { num },
    }
  }
</script>

<script>
  import { number } from '$lib/stores.js'
  import '$lib/styles/app.css'
  import Page from '$lib/components/Page/index.svelte'
  import SEO from '$lib/components/SEO/index.svelte'
  import { socialLinks } from '$lib/presets'
  import { goto } from '$app/navigation'
  import { browser } from '$app/env'

  export let num
  $number = num

  $: title = links[$number].text
  $: if (browser) {
    goto(links[$number].link)
  }

  $: controls = $number != 5

  $: cta =
    $number < 4
      ? {
          label: 'contact',
          action: () => {
            $number = 4
          },
        }
      : null
</script>
<SEO bind:title description="Egyptian Music Producer & Sound Designer" />
<Page
  bind:number={$number}
  {links}
  {title}
  {socialLinks}
  {cta}
  {controls}
>
  <slot />
</Page>
