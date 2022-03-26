<script>
  import { navlinks } from '$lib/stores'
  import { goto } from '$app/navigation'

  import Button from '$lib/components/Button/index.svelte'
  import Footer from '$lib/components/Footer/index.svelte'
  import Form from '$lib/components/Form/index.svelte'
  import { sendMessage } from '$lib/gql'

  import { contact, profile } from '$lib/presets'
  import { number, user, scroll } from '$lib/stores'
  import { fade } from 'svelte/transition'
  $scroll = false

  function send(message) {
    console.log(message.detail)
  }
</script>

<h1 class="pl-4 md:pl-8 pt-9 md:pt-12">Contact</h1>
<div
  class="p-4 max-w-5xl mx-auto pt-20 md:mt-0"
  transition:fade={{ duration: 500 }}
>
  <h2 class="mx-auto text-center">get in touch with shereef</h2>
  <Form
    {...contact}
    on:submit={send}
    className="max-w-[90%] md:max-w-[600px] mx-auto"
  />
</div>

<Footer links={$navlinks} />