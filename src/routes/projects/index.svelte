<script context="module">
  import { getProjects } from '$lib/gql'

  export async function load({ url }) {
    let currentStep = url.searchParams.get('num') || 0

    let projects = await getProjects()
    projects = projects.map(project => {
      return {
        title: project.title,
        text: project.text,
        thumbnail: {
          type: 'card',
          alt: `${project.title} | Shereef Mostafa`,
          src: project.thumbnail.url,
        },
        videoUrl: project.videoUrl,
        images: project.clientLogos,
      }
    })

    return {
      props: { currentStep, projects },
    }
  }
</script>

<script>
  import Carrousel from '$lib/components/Carrousel/index.svelte'
  import SEO from '$lib/components/SEO/index.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import PageTransition from '$lib/components/Page Transition/index.svelte'

  let contactRedirect

  export let projects
  export let currentStep
</script>

<a href="/contact" bind:this={contactRedirect} class="hidden">redirect</a>

<SEO 
  title="Projects {currentStep > 0? `| ${projects[currentStep].title}`: ''}"
  description="Browse Shereef's diverse portfolio. {currentStep > 0?  `View Shereef's work on ${projects[currentStep].title}. ${projects[currentStep].text}`:``}"
  img={currentStep > 0? projects[currentStep].thumbnail.src: null}
/>

<PageTransition>
  {currentStep > 0? projects[currentStep].title: 'projects'}
</PageTransition>

<Animateonenterview>
  <div class="min-h-screen relative">
    <h1 class="absolute left-[4%] top-[5%] z-[950] shadow-secondary/40">Projects</h1>
    <Carrousel
      bind:currentStep
      items={projects}
    />
  </div>
</Animateonenterview>
