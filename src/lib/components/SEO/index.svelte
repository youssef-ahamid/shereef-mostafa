<script>
    import { siteLanguage, siteTitle, siteUrl } from '$lib/config'
  
    export let description = ''
    export let title = ''
    export let img = ''
  
    const pageTitle = `${siteTitle} | ${title}`
  </script>
  
  <svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <meta name="title" content={pageTitle} />
    <meta name="image" content={img} />
  
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={img} />
  
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
  
    <html lang={siteLanguage} />
</svelte:head>