<script>
  import Go from '$lib/components/Go/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Hero from '$lib/components/Hero/index.svelte'
  import PageTransition from '$lib/components/Page Transition/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
</script>

<PageTransition>
 thank you
</PageTransition>

<Animateonenterview>
  <Hero fullHeight className="items-center">
    <div class="max-w-2xl mx-auto ">
      <h2 class="leading-none whitespace-pre-line">
        Thank you for your message. 
        
        You will receive a confirmation email shortly.</h2>
      <div
        class="flex items-center justify-between w-full max-w-[240px] md:max-w-sm"
      >
        <Go to="/">
          <Button label="Home" shape="ghost" />
        </Go>
        <Go to="/projects">
          <Button icon={Arrow} label="explore" shape="ghost" />
        </Go>
      </div>
    </div>
  </Hero>
</Animateonenterview>
