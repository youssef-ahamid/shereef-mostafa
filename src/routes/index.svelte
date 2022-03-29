<script context="module">
  import Image from '$lib/components/Image/index.svelte'
  import { getBios } from '$lib/gql'

  export async function load() {
    let bios = await getBios()
    bios = bios.map(bio => {
      return {
        title: bio.title,
        body: bio.body,
        preview: {
          component: Image,
          data: {
            type: 'card',
            alt: `${bio.title} | Shereef Mostafa`,
            src: bio.image? bio.image.url: null,
            clip: true,
          },
        },
        main: bio.main,
      }
    })

    return { props: { bios } }
  }
</script>

<script>
  import Form from '$lib/components/Form/index.svelte'
  import Go from '$lib/components/Go/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Section from '$lib/components/Section/index.svelte'
  import Hero from '$lib/components/Hero/index.svelte'
  import FeatureList from '$lib/components/Feature List/index.svelte'
  import PageTransition from '$lib/components/Page Transition/index.svelte'
  import Footer from '$lib/components/Footer/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'

  import { contact } from '$lib/presets'
  import {
    featuredProjects,
    navlinks,
    contactConfig,
    user,
  } from '$lib/stores'
  

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

  export let bios
  let main = bios.filter(bio => bio.main)[0]
  bios = bios.filter(bio => !bio.main)
</script>

<a href="/thankyou" class="hidden" bind:this={thankyouRedirect}
  >redirect</a
>
<PageTransition />
<Section id="home">
  <Hero fullHeight reverse>
    <svelte:fragment slot="left">
      <Image type="overlay" {...main.preview.data} />
    </svelte:fragment>

    <div slot="right" class="min-w-[50%] md:max-w-[80%]">
      <h1 class="text-6xl md:text-7xl md:whitespace-nowrap">
        {main.title}
      </h1>
      <p class="body-lg">{main.body}</p>
      <Go to="/projects">
        <Button label="explore" icon={Arrow} shape="ghost" />
      </Go>
    </div>
    
    <svelte:fragment slot="cta">
      <Go to="/contact">
        <Button label="contact" type="secondary" shape="round" />
      </Go>
    </svelte:fragment>

  </Hero>
</Section>

<Section title="bio">
  <FeatureList features={bios} zigzag />
</Section>

<Section
  title="projects"
  cta={{
    link: 'projects',
    label: 'view more projects',
    shape: 'round',
  }}
>
  <FeatureList features={$featuredProjects} zigzag />
</Section>

<Section title="contact">
  <Form
    {...contact}
    on:submit={send}
    className="max-w-[90%] md:max-w-[600px] mx-auto"
  />
</Section>

<Footer links={$navlinks} copyright={$contactConfig.copyright} />
