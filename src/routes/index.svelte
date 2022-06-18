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
  import List from '$lib/components/List/index.svelte'
  import FeatureList from '$lib/components/Feature List/index.svelte'
  import PageTransition from '$lib/components/Page Transition/index.svelte'
  import SEO from '$lib/components/SEO/index.svelte'

  import Arrow from '$lib/icons/arrow.svelte'

  import { contact } from '$lib/presets'
  import {
    featuredProjects,
    contactConfig,
    user,
  } from '$lib/stores'

  import { socialLinks } from '$lib/stores';
  let socials = $socialLinks.filter(link => !!link.to)

  import { socialLink } from '$lib/components/Footer/styles';

  import zaagel from 'zaagel'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  zaagel.configure($contactConfig)

  let thankyouRedirect

  async function send(e) {
    $user = e.detail
    thankyouRedirect.click()

    let message = {
      to: $contactConfig.siteEmail,
      subject: `New Message Received from ${e.detail.name}`,
      template: 'message-received',
      data: { ...e.detail, ...$contactConfig },
      replyTo: e.detail.email,
    }

    fetch(`https://zaagel.samuraisoftware.house/mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(message),
    })

    if ($contactConfig.thankYou) {
      let confirmation = {
        to: e.detail.email,
        subject: `Message sent to ${$contactConfig.siteOwner}`,
        template: 'message-sent',
        data: { ...e.detail, ...$contactConfig },
        replyTo: $contactConfig.siteEmail,
      }

      $user.timeout = setTimeout(() => {
        fetch(`https://zaagel.samuraisoftware.house/mail`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          body: JSON.stringify(confirmation),
        })
      }, 15000)
    }
  }

  export let bios
  let main = bios.filter(bio => bio.main)[0]
  bios = bios.filter(bio => !bio.main)
</script>

<a href="/thankyou" class="hidden" target="_self" bind:this={thankyouRedirect}
  >redirect</a
>
<SEO 
  title="Home"
  description={main.body}
/>
<PageTransition />
<Section id="home">
  <Hero fullHeight reverse>
    <svelte:fragment slot="left">
      <Animateonenterview>
        <Image type="overlay" {...main.preview.data} />
      </Animateonenterview>
    </svelte:fragment>

    <List items={socials} let:prop={link} className="absolute px-3 py-5 shadow-2xl shadow-secondary/80 bg-secondary rounded-full right-8 md:-right-20 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
      <Go to={link.to} redirect={link.redirect} className={socialLink + ' mr-0'}>
        <svelte:component this={link.component} />
      </Go>
    </List>

    <svelte:fragment slot="right">
      <Animateonenterview type="flyLeft">
        <div class="min-w-[50%] md:max-w-[80%] mx-auto py-6">
          <h1 class="text-6xl md:text-7xl md:whitespace-nowrap pb-1">
            {main.title}
          </h1>
          <p class="body-lg max-w-[64ch]">{main.body}</p>
          <Go to="/projects">
            <Button label="explore" icon={Arrow} shape="ghost" />
          </Go>
        </div>
      </Animateonenterview>
    </svelte:fragment>

    <svelte:fragment slot="cta">
      <Animateonenterview type="flyRight">
        <Go to="/contact">
          <Button label="contact" type="secondary" shape="round" />
        </Go>
      </Animateonenterview>
    </svelte:fragment>
  </Hero>
</Section>

<Section title="bio">
  <FeatureList features={bios} zigzag />
</Section>

<Section title="projects">
  <FeatureList features={$featuredProjects} grid />
</Section>

<Section title="contact">
  <Form
    {...contact}
    on:submit={send}
    className="max-w-[90%] md:max-w-[600px] mx-auto"
  />
</Section>
