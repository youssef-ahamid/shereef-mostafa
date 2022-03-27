<script>
  import Form from '$lib/components/Form/index.svelte'
  import Go from '$lib/components/Go/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Section from '$lib/components/Section/index.svelte'
  import Hero from '$lib/components/Hero/index.svelte'
  import Image from '$lib/components/Image/index.svelte'
  import FeatureList from '$lib/components/Feature List/index.svelte'
  import Footer from '$lib/components/Footer/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'
  
  import { navlinks } from '$lib/stores'
  
  import { contact, profile } from '$lib/presets'
  
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
  let projects = [
    {
      preview: {
        component: Image,
        data: {
          type: 'card',
          alt: 'hello from the alt world',
          src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        },
      },
      title: 'hello!',
      cta: {
        link: '/projects?num=0',
        shape: 'ghost',
        icon: Arrow,
        label: 'view project',
      },
      videoUrl:
        'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      preview: {
        component: Image,
        data: {
          type: 'card',
          alt: 'hello from the alt world',
          src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        },
      },
      cta: {
        link: '/projects?num=1',
        shape: 'ghost',
        icon: Arrow,
        label: 'view project',
      },
      title: 'hello!',
      videoUrl:
        'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      preview: {
        component: Image,
        data: {
          type: 'card',
          alt: 'hello from the alt world',
          src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        },
      },
      title: 'hello!',
      cta: {
        link: '/projects?num=2',
        shape: 'ghost',
        icon: Arrow,
        label: 'view project',
      },
      videoUrl:
        'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      preview: {
        component: Image,
        data: {
          type: 'card',
          alt: 'hello from the alt world',
          src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        },
      },
      title: 'hello!',
      cta: {
        link: '/projects?num=3',
        shape: 'ghost',
        icon: Arrow,
        label: 'view project',
      },
      videoUrl:
        'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
  ]

  let bios = [
    {
      title: 'Early Life',
      body: `Hello there and welcome to the feature section!
      
      it can have line breaks and whatnot.`,
      preview: {
        component: Image,
        data: {
          type: 'custom',
          alt: 'hello from the alt world',
          src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
          clip: true,
        },
      },
    },
    {
      title: 'Early Life',
      body: `Hello there and welcome to the feature section!
      
      it can have line breaks and whatnot.`,
      preview: {
        component: Image,
        data: {
          type: 'custom',
          alt: 'hello from the alt world',
          src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
          clip: true,
        },
      },
    },
    {
      title: 'Early Life',
      body: `Hello there and welcome to the feature section!
      
      it can have line breaks and whatnot.`,
      preview: {
        component: Image,
        data: {
          type: 'custom',
          alt: 'hello from the alt world',
          src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
          clip: true,
        },
      },
    },
  ]
</script>

<Section id="home">
  <Hero fullHeight>
    <svelte:fragment slot="left">
      <h1 class="text-6xl md:text-7xl md:whitespace-nowrap">
        Shereef Mostafa
      </h1>
      <p class="body-lg">hello from the underworld!</p>
      <Go to="/projects">
        <Button label="explore" icon={Arrow} shape="ghost" />
      </Go>
    </svelte:fragment>

    <svelte:fragment slot="cta">
      <Go to="/contact">
        <Button label="contact" type="secondary" shape="round" />
      </Go>
    </svelte:fragment>

    <svelte:fragment slot="right">
      <Image
        type="card"
        alt="shereef mostafa | website"
        src="https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg"
      />
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
  <FeatureList features={projects} zigzag />
</Section>

<Section title="contact">
  <Form
    {...contact}
    on:submit={send}
    className="max-w-[90%] md:max-w-[600px] mx-auto"
  />
</Section>

<Footer links={$navlinks} />
