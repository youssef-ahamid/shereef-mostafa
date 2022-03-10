<script>
  export let className = ''
  export let active = false
</script>

<button class={`${className} group flex flex-col`} on:click>
  <span
    class="transition duration-200 ease-out rounded-xl my-1 w-7 h-0.5 bg-primary origin-right md:origin-left {active
      ? 'transform rotate-[-45deg] md:rotate-[45deg] scale-x-125'
      : 'md:group-hover:scale-x-125'}"
  />
  <span
    class="transition duration-200 ease-out rounded-xl my-1.5 w-7 h-0.5 bg-primary scale-x-150  origin-right md:origin-left {active
      ? 'scale-x-0'
      : 'md:group-hover:scale-x-125'}"
  />
  <span
    class="transition duration-200 ease-out rounded-xl my-1 w-7 h-0.5 bg-primary origin-right md:origin-left {active
      ? 'transform rotate-[45deg] md:rotate-[-45deg] scale-x-125'
      : 'md:group-hover:scale-x-125'}"
  />
</button>
