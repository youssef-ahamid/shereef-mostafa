<script>
  import { contactConfig, user } from '$lib/stores'

  import Button from '$lib/components/Button/index.svelte'
  import Go from '$lib/components/Go/index.svelte'
  import Copy from '$lib/components/Copy/index.svelte'
  import Emailattachment from '$lib/icons/social/email attachment.svelte'
  import Mappin from '$lib/icons/social/map pin.svelte'
  import Form from '$lib/components/Form/index.svelte'
  import SEO from '$lib/components/SEO/index.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import PageTransition from '$lib/components/Page Transition/index.svelte'

  import { contact } from '$lib/presets'
  import { fade } from 'svelte/transition'

  import zaagel from 'zaagel'
  zaagel.configure($contactConfig)

  let thankyouRedirect

  async function send(e) {
    $user = e.detail
    thankyouRedirect.click()

    let message = {
      to: $contactConfig.siteEmail,
      subject: `New Message Received from ${e.detail.name}`,
      template: 'message-received',
      body: e.detail,
      replyTo: e.detail.email,
    }

    zaagel.mail(message)

    if ($contactConfig.thankYou) {
      let confirmation = {
        to: e.detail.email,
        subject: `Message sent to ${$contactConfig.siteOwner}`,
        template: 'message-sent',
        body: e.detail,
        replyTo: $contactConfig.siteEmail,
      }

      zaagel.mail(confirmation)
    }
  }
</script>

<a href="/thankyou" class="hidden" bind:this={thankyouRedirect}
  >redirect</a
>

<SEO 
  title="Contact"
  description="Get in touch with Shereef Mostafa"
/>

<PageTransition>
  get in touch
</PageTransition>

<Animateonenterview>
  <h1 class="pl-8 pt-9 md:pt-12">Contact</h1>
  <div
    class="hidden md:flex absolute right-[10%] top-12 w-80 justify-between items-center"
  >
    <Copy value={$contactConfig.siteEmail}>
      <Button
        label="email"
        shape="ghost"
        reverse
        icon={Emailattachment}
      />
    </Copy>
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
</Animateonenterview>
