<script>
  import { fade } from 'svelte/transition'
  import { scroll, number } from '$lib/stores.js'
  import Carrousel from '$lib/components/Carrousel/index.svelte'

  import { bio } from '$lib/presets'
</script>

{#if $number === 1}
  <div
    in:fade={{ duration: 500, delay: 300 }}
    out:fade={{ duration: 250 }}
  >
    <Carrousel
      items={bio}
      on:complete={() => {
        $scroll = true
      }}
      on:rewatch={() => {
        $scroll = false
      }}
    />
  </div>
{/if}
