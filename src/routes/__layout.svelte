<script context="module">
  export const prerender = true
  import Image from '$lib/components/Image/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'
  import { getProjects, getContact } from '$lib/gql'

  export async function load({ url }) {
    let projectLinks = []
    let projects = await getProjects(4)

    projects = projects.map((project, i) => {
      projectLinks.push({
        to: `/projects?num=${i}`,
        text: project.title,
      })

      return {
        title: project.title,
        body: project.text,
        preview: {
          component: Image,
          data: {
            type: 'card',
            alt: `${project.title} | Shereef Mostafa`,
            src: project.thumbnail.url,
          },
        },
        cta: {
          link: `/projects?num=${i}`,
          shape: 'ghost',
          icon: Arrow,
          label: 'view project',
        },
        videoUrl: project.videoUrl,
        images: project.clientLogos.map(logo => logo.url),
      }
    })

    let contactSettings = await getContact()
    return {
      props: {
        url,
        contactSettings,
        projectLinks,
        projects,
      },
    }
  }
</script>

<script>
  export let url, contactSettings, projectLinks, projects

  import '$lib/styles/app.css'

  import Nav from '$lib/components/Nav/index.svelte'
  import {
    navlinks,
    featuredProjects,
    contactConfig,
  } from '$lib/stores'

  $navlinks[1].links = projectLinks
  $featuredProjects = projects
  $contactConfig = contactSettings

  let urls = $navlinks.map(link => link.to)
  let activeLink = urls.indexOf(url.pathname)
  let activeSub = 0

  let linksWithSubs = $navlinks.map(link => link.links)
  linksWithSubs.forEach((subs, i) => {
    let sublink = url.href.replace(url.origin, '')
    if (!!subs) {
      let tos = subs.map(link => link.to)
      if (tos.includes(sublink)) {
        activeSub = tos.indexOf(sublink)
        activeLink = i
      }
    }
  })

  // Developer note
  // console.log(`Like looking under the hood?\n\nWant to knows how something on this site was created?\n\nPing me!\nmailto: youssef@getbrewsy.com\ntel: +201200525233`)
</script>

<Nav links={$navlinks} {activeLink} {activeSub} />
<slot />
