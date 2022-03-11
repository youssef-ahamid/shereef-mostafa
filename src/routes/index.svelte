<script>
  import Go from '$lib/components/Go/index.svelte'
  import { number } from '$lib/stores'
  import { fly, fade } from 'svelte/transition'
  import logo from '$lib/images/logo.png'
</script>

{#if $number === 0}
  <div
    class="fixed inset-0 flex flex-col flex-wrap justify-center items-center"
  >
    <img
      transition:fade={{ duration: 400 }}
      class="block w-64 md:w-80 absolute bottom-1/2"
      src={logo}
      alt="ahmed mitry logo"
    />
    <div
      class="flex justify-center items-center my-24 md:my-12 absolute top-1/2"
      transition:fly={{ y: 20, duration: 300, delay: 400 }}
    >
      <Go to="/music-production">
        <h2
          transition:fade={{ duration: 300, delay: 400 }}
          class="text-center underline underline-offset-2 decoration-2 decoration-secondary hover:decoration-primary transition duration-300 ease-out"
        >
          music producer
        </h2>
      </Go>
      <div
        class="w-3 h-3 rounded-full bg-primary opacity-75 mx-3 md:mx-12"
      />
      <Go to="/sound-design">
        <h2
          transition:fade={{ duration: 300, delay: 400 }}
          class="text-center underline underline-offset-2 decoration-2 decoration-secondary hover:decoration-primary transition duration-300 ease-out"
        >
          sound designer
        </h2>
      </Go>
    </div>
  </div>
{/if}
