<script>
    export let className = ''
</script>

<button class={`${className} group flex flex-col`} on:click>
    <span class="transition duration-200 ease-out rounded-xl my-1 w-8 h-0.5 bg-primary group-hover:scale-x-125 origin-right md:origin-left"></span>
    <span class="transition duration-200 ease-out rounded-xl my-1 w-8 h-0.5 bg-primary scale-x-150 group-hover:scale-x-125 origin-right md:origin-left"></span>
    <span class="transition duration-200 ease-out rounded-xl my-1 w-8 h-0.5 bg-primary group-hover:scale-x-125 origin-right md:origin-left"></span>
</button>