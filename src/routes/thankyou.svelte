<script>
	import Button from '$lib/components/Button/index.svelte';
    import Arrow from "$lib/icons/arrow.svelte";
    import { number, user, scroll } from "$lib/stores";
    if (!$user) $number = 0
    $scroll = false

</script>

<div class="p-6">
    <h3>Thank you for your message, {$user.name.split(' ')[0]}</h3>
    <Button icon={Arrow} label="Home" shape="ghost" reverse on:click={() => {$number = 0}}/>
</div>