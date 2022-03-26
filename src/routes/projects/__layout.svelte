<script context="module">
    export const prerender = true
    export async function load({ url }) {
      let links = [
      {
        to: '/',
        text: 'Home',
      },
      {
        to: '/projects',
  
        text: 'projects',
        links: [
          {
            to: '/projects?num=0',
  
            text: 'hamada 1',
          },
          {
            to: '/projects?num=1',
  
            text: 'hamada 2',
          },
          {
            to: '/projects?num=2',
  
            text: 'hamada 3',
          },
          {
            to: '/projects?num=3',
  
            text: 'hamada 4',
          },
        ],
      },
      {
        to: '/contact',
  
        text: 'contact',
      },
    ]
  
      let urls = links.map(link => link.to)
      let activeLink = urls.indexOf(url.pathname)
      let activeSub = 0
  
      let linksWithSubs = links.map(link => link.links)
      linksWithSubs.forEach((subs, i) => {
        let sublink = url.href.replace(url.origin, '')
        if(!!subs) {
          let tos = subs.map(link => link.to) 
          if (tos.includes(sublink)) {
            activeSub = tos.indexOf(sublink)
            activeLink = i
          }
        }
      })
      
  
      return { props: {
        activeLink,
        links,
        activeSub,
      }}
    }
    
  </script>
  
  <script>
    import '$lib/styles/app.css'
  
    import Nav from '$lib/components/Nav/index.svelte'
  
    export let activeLink
    export let activeSub
    export let links
  </script>
  
  <Nav {links} {activeLink} {activeSub} />
  <slot />
