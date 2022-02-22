<script>
  import { createEventDispatcher } from "svelte/internal";
  const dispatch = createEventDispatcher();

  import { styleButton, styleLabel, styleIcon } from "./styles";

  export let type = "primary"; // *, secondary
  export let shape = "default"; // *, ghost, full,
  export let icon = ""; // *, image path
  export let label = ""; // *, button text
  export let active = true; // *, false

  $: styles = {
    button: styleButton(type, shape, active),
    label: styleLabel(type, shape),
    icon: styleIcon(type),
  };

  function click() {
    dispatch("click", label);
  }

  function dblclick() {
    dispatch("dblclick", label);
  }
</script>

<button on:click={click} on:dblclick={dblclick} class={styles.button}>
  <h3 class={styles.label}>
    {label}
  </h3>
  {#if icon !== ""}
    <img src={icon} alt={label} class={styles.icon} />
  {/if}
</button>
