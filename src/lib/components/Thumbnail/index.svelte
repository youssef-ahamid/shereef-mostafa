<script>
  /* props */
  export let src = ""; // *, image url
  export let alt = ""; // *, image alt
  export let fade = "none"; // *, small, medium, large
  export let cursor = null; // *, cursor component
  export let className = ""; // *, custom wrapper classes

  /* styles */
  import { config } from "./styles";
  $: classes = config({ fade });
</script>

<img
  on:click
  on:mouseenter
  on:mouseleave
  class={classes.thumbnail + className}
  {src}
  {alt}
/>

{#if cursor }
    <svelte:component this={cursor} />
{/if}
