<script>
  import { navlinks } from '$lib/stores'
  import { goto } from '$app/navigation'

  import Button from '$lib/components/Button/index.svelte'
  import Go from '$lib/components/Go/index.svelte'
  import Copy from '$lib/components/Copy/index.svelte'
  import Emailattatchment from '$lib/icons/social/email attatchment.svelte'
  import Mappin from '$lib/icons/social/map pin.svelte'
  import Footer from '$lib/components/Footer/index.svelte'
  import Form from '$lib/components/Form/index.svelte'

  import { contact, profile } from '$lib/presets'
  import { fade } from 'svelte/transition'
  
  import zaagel from 'zaagel';
  zaagel.configure(profile)

  function send(e) {
    zaagel.mail(
      profile.siteEmail, 
      `New Message Received from ${e.detail.name}`,
      'message-received',
      e.detail
    )
    zaagel.mail(
      e.detail.email, 
      `Message sent to ${e.detail.name}`,
      'message-sent',
      e.detail
    )
  }
</script>

<h1 class="pl-8 pt-9 md:pt-12">Contact</h1>
<div
  class="hidden md:flex absolute right-[10%] top-12 w-80 justify-between items-center"
>
  <Copy value={profile.email}>
    <Button
      label="email"
      shape="ghost"
      reverse
      icon={Emailattatchment}
    />
  </Copy>
  <Go to={profile.location} redirect>
    <Button label="visit" shape="ghost" reverse icon={Mappin} />
  </Go>
</div>

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
