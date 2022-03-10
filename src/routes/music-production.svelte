<script>
  import { fade } from 'svelte/transition'
  import { scroll, number } from '$lib/stores.js'
  import Carrousel from '$lib/components/Carrousel/index.svelte'

  import { production } from '$lib/presets'
</script>

{#if $number === 2}
  <div
    in:fade={{ duration: 500, delay: 300 }}
    out:fade={{ duration: 250 }}
  >
    <Carrousel
      items={production}
      on:complete={() => {
        $scroll = true
      }}
      on:rewatch={() => {
        $scroll = false
      }}
    />
  </div>
{/if}
