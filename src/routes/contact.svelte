<script>
    import Button from '$lib/components/Button/index.svelte'
    import Form from '$lib/components/Form/index.svelte'

    import { contact, profile } from '$lib/presets'
    
    function send(message) {
        console.log(message.detail)
    }
</script>

<div class="p-4 max-w-3xl mx-auto">
    <div class="my-12">
        <a href="tel:{profile.phone}" class="inline-block">
            <Button label="call" className="mx-0 transform rotate-90 origin-bottom-left"/>
        </a>
        <a href="mailto:{profile.email}" class="inline-block">
            <Button label="Email" className="mx-0"/>
        </a>
    </div>
    <Form {...contact} on:submit={send} className="max-w-[90%] mx-auto" />
</div>