<script>
  import { getBios } from '$lib/gql'
  import { fade } from 'svelte/transition'
  import { scroll, number } from '$lib/stores.js'
  import Carrousel from '$lib/components/Carrousel/index.svelte'
  import Thumbnail from '$lib/components/Thumbnail/index.svelte'

  let bios
  getBios()
    .then(data => {
      bios = data.map(bio => {
        return {
          thumbnail: {
            component: Thumbnail,
            data: {
              alt: 'Ahmed Mitry biography',
              src: bio.image.url,
            },
          },
          text: bio.text.text,
        }
      })
    })
    .catch(e => console.error(e))
</script>

{#if $number === 1 && !!bios}
  <div
    in:fade={{ duration: 500, delay: 300 }}
    out:fade={{ duration: 250 }}
  >
    <Carrousel
      items={bios}
      on:complete={() => {
        $scroll = true
      }}
      on:finish={() => {
        $number++
      }}
      on:rewatch={() => {
        $scroll = false
      }}
    />
  </div>
{/if}
