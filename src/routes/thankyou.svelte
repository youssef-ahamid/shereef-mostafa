<script>
  import Go from '$lib/components/Go/index.svelte'
  import Button from '$lib/components/Button/index.svelte'
  import Hero from '$lib/components/Hero/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  import { user } from '$lib/stores'
</script>

<Animateonenterview>
  <Hero fullHeight className="items-center">
    <div>
      <h2>Thank you for your message, {$user.name.split(' ')[0]}</h2>
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
