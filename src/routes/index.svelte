<script>
	import Carrousel from '$lib/components/Carrousel/index.svelte';
  // import Stepper from '$lib/components/Stepper/index.svelte'
  import Title from '$lib/components/Title/index.svelte'
  import Form from '$lib/components/Form/index.svelte'
  import Go from '$lib/components/Go/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Image from '$lib/components/Image/index.svelte'
  import FeatureList from '$lib/components/Feature List/index.svelte'
  // import TextInput from '$lib/components/Text Input/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'
  import { contact } from '$lib/presets'

  function send(e) {
    console.log(e.detail)
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
        label: 'view project'
      },
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
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
        label: 'view project'
      },
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
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
        label: 'view project'
      }, 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
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
        label: 'view project'
      },
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    }
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

  // let value = ''
  // let value2 = ''
  // import NavLink from '$lib/components/Nav Link/index.svelte'
  import Nav from '$lib/components/Nav/index.svelte'

  let links = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/projects',
      redirect: true,
      text: 'projects',
      links: [
        {
          to: '/projects?num=0',
          redirect: true,
          text: 'hamada 1',
        },
        {
          to: '/projects?num=1',
          redirect: true,
          text: 'hamada 2',
        },
        {
          to: '/projects?num=2',
          redirect: true,
          text: 'hamada 3',
        },
        {
          to: '/projects?num=3',
          redirect: true,
          text: 'hamada 4',
        },
      ]
    },
    {
      to: '/contact',
      redirect: true,
      text: 'contact',
    },
  ]

  let active = false

  const toggle = () => {
    active = !active
  }


  let items = [
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `Lorem ipsum is a filler text developed to take up space when a you require the appearance of wriiten text ten text when really nothing is written. If yo’ve read this far you’re part of the problem.`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `3ed el gmail heheheh
      
      lessa same3ha`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `3ed el gmail heheheh
      
      lessa same3ha`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `Lorem ipsum is a filler text developed to take up space when a you require the appearance of wriiten text ten text when really nothing is written. If yo’ve read this far you’re part of the problem.`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `3ed el gmail heheheh
      
      lessa same3ha`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `3ed el gmail heheheh
      
      lessa same3ha`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `Lorem ipsum is a filler text developed to take up space when a you require the appearance of wriiten text ten text when really nothing is written. If yo’ve read this far you’re part of the problem.`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `3ed el gmail heheheh
      
      lessa same3ha`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    },
    {
      thumbnail: {
        src: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
        alt: 'hello',
      }, 
      text: `3ed el gmail heheheh
      
      lessa same3ha`, 
      title: 'hello!', 
      videoUrl: 'https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg',
    }
  ]
</script>
<Nav {links} />

<div class="py-20 w-full md:max-w-[90%] mx-auto">
  <Title>bio</Title>
  <FeatureList features={bios} zigzag />
</div>

<div class="py-20 w-full md:max-w-[90%] mx-auto">
  <Title>Projects</Title>
  <FeatureList features={projects} zigzag />
  <div class="w-full flex justify-center">
    <Go to="/projects">
      <Button label="view more projects" shape="round" />
    </Go>
  </div>
</div>

<div class="py-20 w-full md:max-w-[90%] mx-auto">
  <Title>Contact</Title>
  <Form
    {...contact}
    on:submit={send}
    className="max-w-[90%] md:max-w-[600px] mx-auto"
  />
</div>

<!-- <Stepper steps={5} direction="horizontal" /> -->
<!-- <Button label="activate" on:click={toggle} />
<NavLink to="https://getbrewsy.com" redirect {links} bind:active
  >Brewsy</NavLink
>

<Image type="card" alt="hamada" src="https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg" />
<Image type="overlay" alt="hamada" src="https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg" /> -->

<!-- <div
  class="flex justify-around items-center flex-wrap w-screen h-screen"
>
  <h5>Ajgjrmrfk rjjrgg</h5>
  <h3>Ta3alaaneekak</h3>
  <h4>YabnelmarayaFager</h4>
  <Button label="walnuts arfeafe great" shape="round" />
  <Button
    label="walnuts arfeafe great"
    shape="round"
    type="secondary"
    icon={Arrow}
  />
  <Button label="walnuts arfeafe great" shape="ghost" />

  <Button label="walnuts arfeafe great" />
  <Button label="walnuts arfeafe great" type="secondary" />

  <TextInput
    label="hamada"
    type="text area"
    bind:value
    validations={[{ type: 'required', error: 'required field' }]}
  />

  <TextInput
    label="hamada"
    type="text"
    bind:value2
    validations={[{ type: 'required', error: 'required field' }]}
  />
</div> -->
