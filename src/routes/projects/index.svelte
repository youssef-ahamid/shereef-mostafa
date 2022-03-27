<script context="module">
  import { getProjects } from '$lib/gql';

  export async function load({ url }){
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
      props: { currentStep, projects }
    }
  }
</script>


<script>
  import Carrousel from '$lib/components/Carrousel/index.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte';
  
  import { goto } from '$app/navigation';
  
  export let projects
  export let currentStep
</script>

<h1 class="pl-8 pt-9 md:pt-12">Projects</h1>
<Animateonenterview>
  <Carrousel
    bind:currentStep
    items={projects}
    on:finish={() => {
      goto('/contact')
    }}
  />
</Animateonenterview>
