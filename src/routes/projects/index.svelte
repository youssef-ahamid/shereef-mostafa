<script context="module">
  export async function load({ url }) {
    let startStep = url.searchParams.get('project') || 0
    return {
      props: { startStep }
    }
  }
</script>

<script>
    import { getBios } from '$lib/gql'
    import { fade } from 'svelte/transition'
    import { scroll, number } from '$lib/stores.js'
    import Carrousel from '$lib/components/Carrousel/index.svelte'
    import Thumbnail from '$lib/components/Thumbnail/index.svelte'
    
    let projects = [
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
    export let startStep
  
    // let bios
    // getBios()
    //   .then(data => {
    //     bios = data.map(bio => {
    //       return {
    //         thumbnail: {
    //           component: Thumbnail,
    //           data: {
    //             alt: 'Ahmed Mitry biography',
    //             src: bio.image.url,
    //           },
    //         },
    //         text: bio.text.text,
    //       }
    //     })
    //   })
    //   .catch(e => console.error(e))
  </script>
  
    <div
      in:fade={{ duration: 500, delay: 300 }}
      out:fade={{ duration: 250 }}
    >
      <Carrousel
        currentStep={startStep}
        items={projects}
        on:complete={() => {
          $scroll = true
        }}
        on:finish={() => {
          $number++
        }}
        on:rewatch={() => {
          $scroll = false
        }}
      />
    </div>
  