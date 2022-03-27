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
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import PageTransition from '$lib/components/Page Transition/index.svelte'

  let contactRedirect

  export let projects
  export let currentStep
</script>

<a href="/contact" bind:this={contactRedirect} class="hidden">redirect</a>

<PageTransition>
  {currentStep > 0? projects[currentStep].title: 'projects'}
</PageTransition>

<Animateonenterview>
  <h1 class="pl-8 pt-9 md:pt-12">Projects</h1>
  <Carrousel
    bind:currentStep
    items={projects}
  />
</Animateonenterview>
