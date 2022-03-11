<script context="module">
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
      props: {
        num,
        links,
      },
    }
  }
</script>

<script>
  import { number, scroll } from '$lib/stores.js'
  import '$lib/styles/app.css'
  import Page from '$lib/components/Page/index.svelte'
  import { socialLinks } from '$lib/presets'
  import { goto } from '$app/navigation'
  import { browser } from '$app/env'

  export let num
  $number = num

  $: title = links[$number].text
  $: if (browser) {
    goto(links[$number].link)
  }
  $: $scroll = $number < 4
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
