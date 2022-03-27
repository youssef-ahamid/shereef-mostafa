<script>
  import { draw, fade } from 'svelte/transition'

  export let value = ''
  export let id = ''

  let data
  let copied = false

  function copy() {
    data.select()
    data.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(value)
    copied = true
  }
</script>

<div class="relative">
  <input
    type="text"
    {id}
    bind:value
    class="hidden"
    bind:this={data}
  />
  <div on:click={copy} class="peer">
    <slot />
  </div>

  <div
    role="tooltip"
    class="{copied
      ? 'bg-opacity-75'
      : 'bg-opacity-50'} opacity-0 delay-50 translate-y-1 flex justify-center items-center scale-95 peer-hover:scale-100 peer-active:scale-95 left-1/2 -translate-x-1/2 peer-hover:opacity-100 peer-hover:translate-y-0 absolute z-10 bottom-full py-2 px-3 bg-primary rounded-lg shadow-sm transition duration-300"
  >
    {#if copied}
      <svg
        class="stroke-current text-secondary inline-block rounded-xl w-6 -mt-2 mr-2"
        stroke-width="3"
        stroke-miterlimit="20"
        stroke-dashoffset="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        ><path
          fill="none"
          in:draw={{ duration: 500 }}
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        /></svg
      >
      <p
        class="font-bold text-secondary leading-none whitespace-nowrap"
        in:fade={{ duration: 300 }}
      >
        copied to clipboard
      </p>
    {:else}
      <p class="font-bold text-secondary leading-none">copy</p>
    {/if}
  </div>
</div>
