<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status },
    }
  }
</script>

<script>
  export let error, status
</script>

<svelte:head>
  <title>oops! - Status {status}</title>
</svelte:head>

<div class="w-screen h-screen flex justify-center items-center">
  <h2>{status}: {error.message}</h2>
</div>
